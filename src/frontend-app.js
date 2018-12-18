import HexTooltipComponent from './components/hex-tooltip';
import styles from './app.css';

styles.use();

const defaultCenter = [19.023632, 50.234461];
const defaultZoom = 8.0;
const minZoom = null;
const maxZoom = null;
const maxBounds = null;

const baseUrl = location.origin + location.pathname;

export default class FrontentApp {
  constructor (mapContainer, mapStyle, mapboxAccessToken) {
    mapboxgl.accessToken = mapboxAccessToken;
    this.mapContainer = mapContainer;
    this.mapStyle = mapStyle;
    this.mapInstance = null;
    this.isInitialized = false;
    this.isMapLoaded = false;
  }

  _loadAssets (assets) {

  }

  _init (assets) {
    
  };

  init () {
    this.mapInstance = new mapboxgl.Map({
      container: this.mapContainer,
      style: this.mapStyle,
      center: defaultCenter,
      zoom: defaultZoom,
      minZoom: minZoom,
      maxZoom: maxZoom,
      maxBounds: maxBounds
    });
    this.mapInstance.scrollZoom.disable();
    const nav = new mapboxgl.NavigationControl({
      showCompass: false,
      showZoom: true
    });
    this.mapInstance.addControl(nav, 'top-right');
    this.mapInstance.on('load', () => {
      this.isMapLoaded = true;
      this._loadAssets((assets) => {
        this._init(assets);
      });
    });

    const hexTooltip = new HexTooltipComponent();
    document.body.appendChild(hexTooltip.dom);
  }
}
