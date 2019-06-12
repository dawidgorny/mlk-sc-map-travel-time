import html from 'choo/html';
import Component from 'choo/component';
import resl from 'resl';
import distance from '@turf/distance';
import { point, polygon } from '@turf/helpers';
import centroid from '@turf/centroid';
import pointInPolygon from '@turf/boolean-point-in-polygon';
import merge from '../../utils/merge';

import layerKatowicePolygon from './layer-katowice-polygon';
import layerHexgrid from './layer-hexgrid';
import layerSelection from './layer-selection';
import hexColor from './hex-color';
import hexDurationMood from './hex-duration-mood';

const defaultCenter = [19.023632, 50.234461];
const defaultZoom = 11;

export default class Map extends Component {
  constructor (id, state, emit) {
    super(id, state, emit);
    this.id = id;
    this.state = state;
    this.emit = emit;
    this.local = state.components[id] = merge([{
      assetsPathPrefix: '',
      style: 'mapbox://styles/mapbox/light-v9',
      center: defaultCenter,
      zoom: defaultZoom,
      minZoom: null,
      maxZoom: null,
      maxBounds: null,
      mapLoading: true,
      assetsLoading: true,
      hilightFeatureAt: null,
      destinations: [],
      destinationId: null,
      mode: 'transit'
    }, state.components && state.components[id] ? state.components[id] : {}]);
    this.assets = {};

    this._currentDestinationId = this.local.destinationId;
    this._currentMode = this.local.mode;
    this._currentCenter = this.local.center;

    this._isFeatureSelected = false;
  }

  load (element) {
    mapboxgl.accessToken = this.local.mapboxAccessToken;
    this.map = new mapboxgl.Map({
      container: element,
      style: this.local.style,
      center: this.local.center,
      zoom: this.local.zoom,
      minZoom: this.local.minZoom,
      maxZoom: this.local.maxZoom,
      maxBounds: this.local.maxBounds
    });
    this.map.scrollZoom.disable();
    const nav = new mapboxgl.NavigationControl({
      showCompass: false,
      showZoom: true
    });
    this.map.addControl(nav, 'top-right');

    this.map.on('mouseenter', 'hexgrid', () => {
      this.map.getCanvas().style.cursor = 'pointer';
    });
    this.map.on('mouseleave', 'hexgrid', () => {
      this.map.getCanvas().style.cursor = '';
    });
    let fdTimeout = null;
    this.map.on('click', (e) => {
      this._isFeatureSelected = false;
      this.local.hilightFeatureAt = null;
      this.emit(`${this.id}:mapClick`);
      if (fdTimeout) clearTimeout(fdTimeout);
      fdTimeout = setTimeout(() => {
        if (!this._isFeatureSelected) {
          let geojson = layerSelection('selection').source.data;
          this.map.getSource('selection').setData(geojson);
          this.emit(`${this.id}:featureDeselect`);
        }
      }, 100);
    });
    this.map.on('click', 'hexgrid', (e) => {
      const feature = e.features[0];
      this._isFeatureSelected = feature;

      let geojson = layerSelection('selection').source.data;
      geojson.features[0].geometry.coordinates = feature.geometry.coordinates[0].slice();
      this.map.getSource('selection').setData(geojson);

      this.local.center = centroid(feature.geometry).geometry.coordinates;

      this.emit(`${this.id}:featureClick`, feature);
    });

    this.map.on('load', () => {
      this.local.mapLoading = false;
      this.emit('map:load');
      this._loadAssets();
    });
  }

  update () {
    if (this.local.mode !== this._currentMode || this.local.destinationId !== this._currentDestinationId) {
      this.setDestination(this.local.mode, this.local.destinationId);
    }
    if (this.local.hilightFeatureAt) {
      let geojson = layerSelection('selection').source.data;
      this.map.getSource('selection').setData(geojson);
      // find feature
      const features = this.assets['hexgrid.geojson'].features;
      let feature = null;
      const pt = point(this.local.hilightFeatureAt);
      for (let i = 0; i < features.length; i++) {
        const f = features[i];
        if (pointInPolygon(pt, f.geometry)) {
          feature = f;
          break;
        }
      }

      if (feature) {
        geojson.features[0].geometry.coordinates = feature.geometry.coordinates[0].slice();
        this.map.getSource('selection').setData(geojson);
        this.local.center = centroid(feature.geometry).geometry.coordinates;
        this.emit(`${this.id}:featureClick`, feature);
      }
    }
    if (this._currentCenter[0] !== this.local.center[0] || this._currentCenter[1] !== this.local.center[1]) {
      this.setHilight(this.local.center);
    }

    return false;
  }

  createElement () {
    return html`<div class="w-100 h-100"></div>`;
  }

  _loadAssets () {
    resl({
      manifest: require('./assets-manifest')(this.local.assetsPathPrefix),
      onDone: (assets) => {
        this.assets = merge([this.assets, assets]);
        this._loadAssets2();
      },
      onProgress: (progress, message) => {
        if (process.env.NODE_ENV !== 'production') {
          console.log((progress * 100) + '%');
        }
      },
      onError: (err) => {
        console.error(err);
        this.emit('map:fatalError');
      }
    });
  }

  _loadAssets2 () {
    /**
     * Prepare list of destinations
     */
    this.local.destinations = this.assets['destinations.geojson'].features.map((f) => {
      return { label: f.properties['place_name'], id: f.properties['place-id'] };
    });

    let manifestArr = this.local.destinations.map((dest) => { return { type: 'text', src: `destinations-data/${dest.id}-transit.json`, parser: JSON.parse }; });
    manifestArr = manifestArr.concat(this.local.destinations.map((dest) => { return { type: 'text', src: `destinations-data/${dest.id}-driving.json`, parser: JSON.parse }; }));

    let manifest = {};
    manifestArr.forEach((a) => {
      const name = a.src + '';
      manifest[name] = a;
      manifest[name].src = this.local.assetsPathPrefix + manifest[name].src;
    });
    
    resl({
      manifest,
      onDone: (assets) => {
        this.assets = merge([this.assets, assets]);
        this.local.assetsLoading = false;
        this.emit('map:assetsLoad', this.assets);
        this._prepareData(this.assets);
      },
      onProgress: (progress, message) => {
        if (process.env.NODE_ENV !== 'production') {
          console.log((progress * 100) + '%');
        }
      },
      onError: (err) => {
        console.error(err);
        this.emit('map:fatalError');
      }
    });
  }

  _prepareData (assets) {
    const transparentColor = 'rgba(255, 255, 255, 0.0)';
    /**
     * Process data files and calculate layer colors etc.
     */
    if (this.local.mode === 'diff') {
      this.assets['destinations.geojson'].features.forEach((f) => {
        const placeId = f.properties['place-id'];
        this.assets[`destinations-data/${placeId}-diff.json`] = this.assets[`destinations-data/${placeId}-transit.json`];
        this.assets[`destinations-data/${placeId}-diff.json`].features.forEach((d, i) => {
          const transitDuration = d['duration_value'];
          const drivingDuration = this.assets[`destinations-data/${placeId}-driving.json`].features[i]['duration_value'];
          const transitDurationMinutes = d['duration_value_minutes'];
          const drivingDurationMinutes = this.assets[`destinations-data/${placeId}-driving.json`].features[i]['duration_value_minutes'];
          const durationDiffMinutes = transitDurationMinutes - drivingDurationMinutes;
          const durationDiff = durationDiffMinutes * 60;
          d['transit_duration_text'] = d['duration_text'].toString();
          d['duration_value'] = durationDiff;
          d['duration_value_minutes'] = durationDiffMinutes;
          d['duration_text'] = `${durationDiffMinutes} min`;
          d['transit_duration_value'] = transitDuration;
          d['driving_duration_value'] = drivingDuration;
          d['transit_duration_value_minutes'] = transitDurationMinutes;
          d['driving_duration_value_minutes'] = drivingDurationMinutes;
          d['driving_duration_text'] = this.assets[`destinations-data/${placeId}-driving.json`].features[i]['duration_text'];
          d['tooltip_enabled'] = d['transit_duration_value'] > -1 && d['driving_duration_value'] > -1;
          d.color = d['tooltip_enabled'] ? hexColor('diff', d['duration_value_minutes']) : transparentColor;
          d['duration_mood'] = hexDurationMood('diff', d['duration_value_minutes']);
        });
      });
    } else {
      /**
       * Transit and Driving
       */
      this.assets['destinations.geojson'].features.forEach((f) => {
        const placeId = f.properties['place-id'];
        this.assets[`destinations-data/${placeId}-transit.json`].features.forEach((d) => {
          d['tooltip_enabled'] = d['duration_value'] > -1;
          d['duration_text'] = d['duration_text'].toString();
          d.color = d['tooltip_enabled'] ? hexColor('transit', d['duration_value_minutes']) : transparentColor;
          d['duration_mood'] = hexDurationMood('transit', d['duration_value_minutes']);
        });
        this.assets[`destinations-data/${placeId}-driving.json`].features.forEach((d) => {
          d['tooltip_enabled'] = d['duration_value'] > -1;
          d['duration_text'] = d['duration_text'].toString();
          d.color = hexColor('driving', d['duration_value_minutes']);
          d['duration_mood'] = d['duration_value'] < 0 ? transparentColor : hexDurationMood('transit', d['duration_value_minutes']);
        });
      });
    }

    /**
     * Add katowice boundary to the map
     */
    const katowicePolygonLayer = this.map.addLayer(layerKatowicePolygon(assets['katowice-polygon.geojson']));

    let hexgrid = layerHexgrid('hexgrid', assets['hexgrid.geojson'], 'visible');
    hexgrid.layerDef.source = hexgrid.sourceDef;
    this.map.addLayer(hexgrid.layerDef, 'airport-label');

    /**
     * Add selection layer
     */
    let hexSelection = layerSelection('selection');
    this.map.addLayer(hexSelection, 'airport-label');

    this.emit('map:ready');
  }

  setDestination (mode, destinationId) {
    const dataSource = `destinations-data/${destinationId}-${mode}.json`;
    if (!this.assets[dataSource]) return;

    let geojson = this.assets['hexgrid.geojson'];
    let data = this.assets[dataSource].features;

    this._currentMode = mode;
    this._currentDestinationId = destinationId;

    for (let i = 0; i < geojson.features.length; i++) {
      const f = geojson.features[i];
      const d = data[i];
      const prop = f.properties;
      prop['color'] = d.color;
      prop['tooltip_enabled'] = d['tooltip_enabled'];
      prop['duration_value'] = d['duration_value'];
      prop['duration_text'] = d['duration_text'];
      prop['duration_mood'] = d['duration_mood'];
      prop['transit_duration_value'] = d['transit_duration_value'];
      prop['driving_duration_value'] = d['driving_duration_value'];
      prop['transit_duration_text'] = d['transit_duration_text'];
      prop['driving_duration_text'] = d['driving_duration_text'];

      if (this._isFeatureSelected && this._isFeatureSelected.properties['cell-id'] === f.properties['cell-id']) {
        this._isFeatureSelected = f;
        this.emit(this.id + ':featureClick', this._isFeatureSelected);
      }
    }

    this.map.getSource('hexgrid').setData(geojson);
    this.emit(this.id + ':destinationSet', { mode, destinationId, properties: this.assets[dataSource].properties });
  }

  setHilight (coordinates, label) {
    function polyInOut (t) {
      const e = 4.0;
      return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
    }

    let coord = defaultCenter;
    let targetZoom = 13.5;
    if (coordinates) {
      targetZoom = 13.5;
      coord = coordinates.slice();
    } else {
      targetZoom = defaultZoom;
    }
    const currentZoom = this.map.getZoom();
    let d = 1.0;
    if (this._currentCenter) {
      d = distance(point(this._currentCenter), point(coord));
    }
    let speed = 0.2 * d;
    this._currentCenter = coord.slice();
    this.map.flyTo({
      center: this._currentCenter,
      zoom: targetZoom,
      screenSpeed: speed,
      easing: polyInOut,
      curve: 1
    });
    this.local.center = this._currentCenter.slice();
  }

}
