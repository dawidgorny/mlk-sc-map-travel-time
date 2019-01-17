module.exports = (assetsPathPrefix) => ({
  'hexgrid.geojson': {
    type: 'text',
    src: assetsPathPrefix + 'hexgrid.geojson',
    parser: JSON.parse
  },
  'destinations.geojson': {
    type: 'text',
    src: assetsPathPrefix + 'destinations.geojson',
    parser: JSON.parse
  },
  'katowice-polygon.geojson': {
    type: 'text',
    src: assetsPathPrefix + 'katowice-polygon.geojson',
    parser: JSON.parse
  }
});
