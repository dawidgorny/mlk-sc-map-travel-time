export default function layerKatowicePolygon (geojson) {
  return {
    'id': 'katowice-polygon',
    'type': 'fill',
    'source': {
      'type': 'geojson',
      'data': geojson
    },
    'layout': {},
    'paint': {
      'fill-color': '#2d2d2d',
      'fill-opacity': 0.2
    }
  };
}
