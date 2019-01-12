import html from 'choo/html';
import Component from 'choo/component';
import resl from 'resl';
import merge from '../../utils/merge';

import layerKatowicePolygon from './layer-katowice-polygon';
import layerHexgrid from './layer-hexgrid';
import hexColor from './hex-color';

export default class Map extends Component {
  constructor (id, state, emit) {
    super(id, state, emit);
    this.state = state;
    this.emit = emit;
    this.local = state.components[id] = merge([{
      style: 'mapbox://styles/mapbox/light-v9',
      center: [19.023632, 50.234461],
      zoom: 10,
      minZoom: null,
      maxZoom: null,
      maxBounds: null,
      mapLoading: true,
      assetsLoading: true,
      hilightCoordinates: null,
      destinations: [],
      destinationId: null,
      mode: 'transit'
    }, state.components && state.components[id] ? state.components[id] : {}]);
    this.setState();
    this.assets = {};

    this._currentDestinationId = this.local.destinationId;
    this._currentMode = this.local.mode;
  }

  setState () {
    
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
    this.map.on('load', () => {
      this.local.mapLoading = false;
      this.emit('map:load');
      this._loadAssets();
    });
  }

  update () {
    let dirty = false;
    if (this.local.mode !== this._currentMode || this.local.destinationId !== this._currentDestinationId) {
      this.setDestination(this.local.mode, this.local.destinationId);
    }
    this.setHilight(this.local.hilightCoordinates);

    // if (this.local.visible !== this.state.main.visible) {
      // dirty = true;
    // }

    if (dirty) {
      this.setState();
    }
    return dirty;
  }

  createElement () {
    return html`<div class="w-100 h-100"></div>`;
  }

  _loadAssets () {
    resl({
      manifest: require('./assets-manifest'),
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
      return { label: f.properties['name'], id: f.properties['place-id'] };
    });

    let manifestArr = this.local.destinations.map((dest) => { return { type: 'text', src: `destinations-data/${dest.id}-transit.json`, parser: JSON.parse }; });
    manifestArr = manifestArr.concat(this.local.destinations.map((dest) => { return { type: 'text', src: `destinations-data/${dest.id}-driving.json`, parser: JSON.parse }; }));

    let manifest = {};
    manifestArr.forEach((a) => {
      manifest[a.src] = a;
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
    /**
     * Process data files and calculate layer colors etc.
     */
    this.assets['destinations.geojson'].features.forEach((f) => {
      this.assets[`destinations-data/${f.properties['place-id']}-transit.json`].forEach((d) => {
        d.color = hexColor('transit', d['duration_value']);
      });
      this.assets[`destinations-data/${f.properties['place-id']}-driving.json`].forEach((d) => {
        d.color = hexColor('driving', d['duration_value']);
      });
    });

    /**
     * Add katowice boundary to the map
     */
    const katowicePolygonLayer = this.map.addLayer(layerKatowicePolygon(assets['katowice-polygon.geojson']));

    let hexgrid = layerHexgrid('hexgrid', assets['hexgrid.geojson'], 'visible');
    hexgrid.layerDef.source = hexgrid.sourceDef;
    this.map.addLayer(hexgrid.layerDef, 'airport-label');


  }

  setDestination (mode, destinationId) {
    const dataSource = `destinations-data/${destinationId}-${mode}.json`;
    if (!this.assets[dataSource]) return;

    let geojson = this.assets['hexgrid.geojson'];
    let data = this.assets[dataSource];

    this._currentMode = mode;
    this._currentDestinationId = destinationId;

    for (let i = 0; i < geojson.features.length; i++) {
      const f = geojson.features[i];
      const d = data[i];
      const prop = f.properties;
      prop['color'] = d.color;
      prop['target_color'] = d.color;
    }

    this.map.getSource('hexgrid').setData(geojson);
  }

  setHilight (coordinates, label) {
    if (coordinates) {
      this.map.flyTo({
        center: coordinates,
        zoom: 11.5,
        speed: 0.5
      });
    } else {
      this.map.flyTo({
        center: [19.023632, 50.234461],
        zoom: 10,
        speed: 0.7
      });
    }
  }


}
