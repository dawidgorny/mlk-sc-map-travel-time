import FrontentApp from './src/frontend-app';

const createApp = require('dg-utils/frontend/create-app');

const lang = require('./lang');

export default function create (mapContainer, mapStyle, mapboxAccessToken, translation) {
  let transl = translation ? translation : lang['pl'];
  const frontend = new FrontentApp(mapContainer, mapStyle, mapboxAccessToken, transl);
  const app = createApp(frontend);
  return frontend;
}

if (window) {
  window.travelTimeMap = { create, lang };
}
