import calculateCentroid from '@turf/centroid';

const parkTime = -7;

export default function layerHexgrid (layerId, data, visibility = 'visible') {
  /* var durationMax = 0;
  R.forEach((o) => {
    durationMax = Math.max(durationMax, o['properties']['duration_value']);
  }, data['features']); */

  var level0Color = 'hsl(244, 61%, 48%)';
  var level1Color = 'rgb(242,242,242)';
  var level2Color = 'rgb(255,169,163)';
  var level3Color = 'rgb(255,65,51)';

  // data['features'] = R.map((o) => {
  data['features'].forEach((o) => {
    if (!o['properties'].hasOwnProperty('cell-id')) {
      return;
    }
    // o['properties'].elevation = Math.random() * 10.0
    o['properties']['height'] = o['properties']['address-count'] * 10.0;

    o['properties']['color'] = '#FFFFFF';

    var level0 = -1;
    var level1 = 17 * 60;
    var level2 = 37 * 60;
    var level3 = 58 * 60;

    // var mode = 'transit'
    if (layerId.indexOf('driving') > -1) {
      level0 = -1;
      level1 = (17 + parkTime) * 60;
      level2 = (23 + parkTime) * 60;
      level3 = (30 + parkTime) * 60;
      // mode = 'driving'
    }

    // var lvl = ''

    if (o['properties']['duration_value'] > level0) {
      o['properties']['color'] = level0Color;
    }

    if (o['properties']['duration_value'] > level1) {
      o['properties']['color'] = level1Color;
    }

    if (o['properties']['duration_value'] > level2) {
      o['properties']['color'] = level2Color;
    }

    if (o['properties']['duration_value'] > level3) {
      o['properties']['color'] = level3Color;
    }


    if (o['properties']['color'] === level1Color) {
      o['geometry']['coordinates'] = [];
    }

    // ---
    /* let r = 0.9;

    var centroid = toWgs84(turf.centroid(o['geometry']));
    let c = getCoord(centroid);

    let v1 = getCoord(toWgs84(turf.point(o['geometry']['coordinates'][0][0])));
    let v2 = getCoord(toWgs84(turf.point(o['geometry']['coordinates'][0][1])));

    let sv = [v2[0] - v1[0], v2[1] - v1[1]];
    let s = Math.sqrt(sv[0] * sv[0] + sv[1] * sv[1]);
    let h = (Math.sqrt(3) / 2) * s * r;

    let verts = [];

    let num = 8;
    let step = (2 * Math.PI) / num;
    for (let i = 0; i < num; i++) {
      let v = turf.point([c[0] + Math.cos(i * step) * h, c[1] + Math.sin(i * step) * h]);
      toMercator(v, { mutate: true });
      verts.push(getCoord(v));
    }

    o['geometry']['coordinates'][0] = verts; */

    var centroid = calculateCentroid(o['geometry']);

    // var bbox = turf.bbox(o['geometry'])
    o['properties']['radius'] = 2// = Math.abs(Math.max(bbox[2] - bbox[0], bbox[3] - bbox[1]))

    // console.log(centroid)

    o['geometry'] = centroid['geometry'];


    o['geometry']['type'] = 'Point';
    // o['geometry']['coordinates'] = centroid['coordinates']


  });

  // map.addSource(layerId + '-source', {
    // 'type': 'geojson',
    // 'data': data
  // })

  
 /*  return {
    sourceId: layerId + '-source',
    sourceDef: {
      'type': 'geojson',
      'data': data
    },
    layerDef: {
      'id': layerId,
      'type': 'fill',
      'source': {
        'type': 'geojson',
        'data': data
      },
      // 'source': layerId + '-source',
      'layout': {
        'visibility': visibility
      },
      'paint': {
        // 'fill-extrusion-opacity': 0.6,
        'fill-color': {
          'property': 'color',
          'type': 'identity'
        },
        // 'fill-outline-color': '#000000'
        // 'fill-extrusion-height': {
          // 'property': 'height',
          // 'type': 'identity'
        // }
      }
    }
  }; */
 


  return {
    sourceId: layerId + '-source',
    sourceDef: {
      'type': 'geojson',
      'data': data
    },
    layerDef: {
      'id': layerId,
      'type': 'circle',
      'source': layerId + '-source',
      'layout': {
        'visibility': visibility
      },
      'paint': {
        // 'fill-extrusion-opacity': 0.6,
        'circle-color': {
          'property': 'color',
          'type': 'identity'
        },
        /* 'circle-radius': {
          'property': 'radius',
          'type': 'identity'
        }, */
        'circle-radius': {
          stops: [
            [0, 0],
            [8, 1],
            [12, 2],
            [15, 22]
          ],
          base: 2
        },
        /* 'circle-opacity': {
          stops: [
            [0, 1],
            [8, 1],
            [12, 1],
            [13, 0.7],
            [15, 0.7]
          ],
          base: 1
        }, */
        'circle-stroke-color': '#000000'
        // 'fill-extrusion-height': {
          // 'property': 'height',
          // 'type': 'identity'
        // }
      }
    }
  } 
}
