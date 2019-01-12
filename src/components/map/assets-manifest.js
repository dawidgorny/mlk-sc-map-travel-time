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
  }
};
