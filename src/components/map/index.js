import html from 'choo/html';
import Component from 'choo/component';
import merge from '../../utils/merge';

export default class Map extends Component {
  constructor (id, state, emit) {
    super(id, state, emit);
    this.local = state.components[id] = merge([{
      style: 'mapbox://styles/mapbox/light-v9',
      center: [19.023632, 50.234461],
      zoom: 8.0,
      minZoom: null,
      maxZoom: null,
      maxBounds: null
    }, state.components && state.components[id] ? state.components[id] : {}]);
  }

  load (element) {
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
      this.isMapLoaded = true;
      // this._loadAssets((assets) => {
        // this._init(assets);
      // });
    });
  }

  update (center) {
    // if (center.join() !== this.local.center.join()) {
      // this.map.setCenter(center);
    // }
    return false;
  }

  createElement (center) {
    // this.local.center = center;
    return html`<div class="w-100 h-100"></div>`;
  }
}
