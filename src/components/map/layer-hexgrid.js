export default function layerHexgrid (layerId, geojson, data, visibility = 'visible') {
  geojson['features'].forEach((o) => {
    if (!o['properties'].hasOwnProperty('cell-id')) {
      return;
    }
    o['properties']['color'] = '#FFFFFF';
  });

  return {
    sourceId: layerId + '-source',
    sourceDef: {
      'type': 'geojson',
      'data': geojson
    },
    layerDef: {
      'id': layerId,
      'type': 'fill',
      'source': layerId + '-source',
      'layout': {
        'visibility': visibility
      },
      'paint': {
        'fill-opacity': 0.6,
        'fill-color': {
          'property': 'color',
          'type': 'identity'
        },
        'fill-outline-color': '#ffffff'
      }
    }
  };
}
