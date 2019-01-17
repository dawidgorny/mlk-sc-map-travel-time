import FrontentApp from './src/frontend-app';

const createApp = require('dg-utils/frontend/create-app');

const lang = require('./lang');

export default function create (mapContainer, mapStyle, mapboxAccessToken, translation, assetsPathPrefix = '') {
  let transl = translation || lang['pl'];
  const frontend = new FrontentApp(mapContainer, mapStyle, mapboxAccessToken, transl, assetsPathPrefix);
  const app = createApp(frontend);
  return frontend;
}

if (window) {
  window.travelTimeMap = { create, lang };
}
