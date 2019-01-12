module.exports = {
  'hexgrid.geojson': {
    type: 'text',
    src: 'hexgrid.geojson',
    parser: JSON.parse
  },
  'destinations.geojson': {
    type: 'text',
    src: 'destinations.geojson',
    parser: JSON.parse
  },
  'katowice-polygon.geojson': {
    type: 'text',
    src: 'katowice-polygon.geojson',
    parser: JSON.parse
  }
};
