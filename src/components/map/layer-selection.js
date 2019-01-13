export default function layerSelection (layerId, visibility = 'visible') {
  return {
    'id': layerId,
    'type': 'line',
    'source': {
      'type': 'geojson',
      'data': {
        "type":"FeatureCollection",
        "features":[
          {
            "type":"Feature",
            "properties":{},
            "geometry": {
              "type":"LineString",
              "coordinates":[[0, 0]]
            }
          }
        ]
      }
    },
    'layout': {
      'visibility': visibility
    },
    'paint': {
      'line-color': 'rgba(0,0,0,1)',
      'line-width': 2
    }
  
  };
}
