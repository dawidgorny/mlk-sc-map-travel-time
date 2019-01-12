import html from 'choo/html';
import Component from 'choo/component';
import resl from 'resl';
import merge from '../../utils/merge';

export default class Map extends Component {
  constructor (id, state, emit) {
    super(id, state, emit);
    this.state = state;
    this.emit = emit;
    this.local = state.components[id] = merge([{
      style: 'mapbox://styles/mapbox/light-v9',
      center: [19.023632, 50.234461],
      zoom: 8.0,
      minZoom: null,
      maxZoom: null,
      maxBounds: null,
      mapLoading: true,
      assetsLoading: true,
      hilightCoordinates: null
    }, state.components && state.components[id] ? state.components[id] : {}]);
    this.setState();
    this.assets = {};

    // emit.on('map:setHilight', (coordinates, label) => { this.setHilight(coordinates, label); });
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
    let manifest = this.assets['destinations.geojson'].features.map((f) => { return { type: 'text', src: `destinations-data/${f.properties['place-id']}-transit.geojson`, parser: JSON.parse }; });
    manifest = manifest.concat(this.assets['destinations.geojson'].features.map((f) => { return { type: 'text', src: `destinations-data/${f.properties['place-id']}-driving.geojson`, parser: JSON.parse }; }));
    
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
    
  }

  setHilight (coordinates, label) {
    console.log(coordinates, label);
  }
}
