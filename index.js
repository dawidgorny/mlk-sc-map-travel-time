import FrontentApp from './src/frontend-app';

const createApp = require('dg-utils/frontend/create-app');

export default function create (mapContainer, mapStyle, mapboxAccessToken) {
  const frontend = new FrontentApp(mapContainer, mapStyle, mapboxAccessToken);
  const app = createApp(frontend);
  return frontend;
}

if (window) {
  window.travelTimeMap = { create };
}
