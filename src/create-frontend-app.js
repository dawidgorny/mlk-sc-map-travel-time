// import mapboxgl from 'mapbox-gl';
// const request = require('request');
const Seq = require('seq');

const defaultCenter = [19.023632, 50.234461];
const defaultZoom = 8.0;
const minZoom = null;
const maxZoom = null;
const maxBounds = null;

const baseUrl = location.origin + location.pathname;

const createFrontendApp = (mapContainer, mapStyle, mapboxAccessToken) => {
  mapboxgl.accessToken = mapboxAccessToken;
  let mapInstance = null;
  let isInitialized = false;
  let isMapLoaded = false;

  const _loadAssets = (onReadyCallback) => {
    const loadGeojson = (url, callback) => {
      /* request(url, (err, res, body) => {
        if (!err && res.statusCode === 200) {
          callback(err, JSON.parse(body));
        } else {
          callback(err);
        }
      }); */
    };
    let seq = Seq();

    // ...
    
    seq = seq.seq(function () {
      const keys = Object.keys(this.args);
      const assets = keys.map((value) => {
        return this.args[value].length === 1 ? this.args[value][0] : this.args[value];
      });
      onReadyCallback(assets);
    });
  };

  const _init = (assets) => {
    
  };

  this.init = () => {
    mapInstance = new mapboxgl.Map({
      container: mapContainer,
      style: mapStyle,
      center: defaultCenter,
      zoom: defaultZoom,
      minZoom: minZoom,
      maxZoom: maxZoom,
      maxBounds: maxBounds
    });
    mapInstance.scrollZoom.disable();
    const nav = new mapboxgl.NavigationControl({
      showCompass: false,
      showZoom: true
    });
    mapInstance.addControl(nav, 'top-right');
    mapInstance.on('load', () => {
      isMapLoaded = true;
      _loadAssets((assets) => {
        _init(assets);
      });
    });
  };

  return this;
};

module.exports = createFrontendApp;
