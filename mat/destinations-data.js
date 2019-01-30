const fs = require('fs');
const path = require('path');

let destinations = JSON.parse(fs.readFileSync(path.join(__dirname, `source/destinations_hexgrid-addresses_distance/destinations.geojson`))).features.map((f) => f.properties);

function mapProp (f) {
  const prop = {
    'cell-id': f.properties['cell-id'],
    'duration_text': f.properties['duration_text'],
    'duration_value': f.properties['duration_value'],
    'distance_text': f.properties['distance_text'],
    'distance_value': f.properties['distance_value']
  };
  return prop;
}

function getStats (features, mode) {
  let stat = [0, 0, 0, 0];

  let stat1num = 0;
  let stat2num = 0;
  let stat3num = 0;
  let stat4num = 0;

  const parkTime = -7;

  let level0 = -1;
  let level1 = 17 * 60;
  let level2 = 37 * 60;
  let level3 = 58 * 60;

  if (mode === 'driving') {
    level0 = -1;
    level1 = (17 + parkTime) * 60;
    level2 = (23 + parkTime) * 60;
    level3 = (30 + parkTime) * 60;
  }

  features.forEach((f) => {
    let duration = f['properties']['duration_value'];
    if (duration > level3) {
      stat4num++;
    } else if (duration > level2) {
      stat3num++;
    } else if (duration > level1) {
      stat2num++;
    } else if (duration > level0) {
      stat1num++;
    }
  });

  let total = stat1num + stat2num + stat3num + stat4num;

  stat[0] = stat1num / total;
  stat[1] = stat2num / total;
  stat[2] = stat3num / total;
  stat[3] = stat4num / total;

  stat = stat.map((x) => Math.round(x * 100.0));

  // make sure it fits 100
  let t = stat[0] + stat[1] + stat[2] + stat[3];
  let m = 100 - t;

  stat = stat.map((v, i) => { return { i, v }; });
  stat = stat.sort((a, b) => a.v - b.v);

  stat[stat.length - 1].v += m;

  stat = stat.sort((a, b) => a.i - b.i);
  stat = stat.map((x) => x.v);

  return stat;
}

for (let i = 0; i < destinations.length; i++) {
  let placeId = destinations[i]['place-id'];

  let contentTransit = JSON.parse(fs.readFileSync(path.join(__dirname, `source/destinations_hexgrid-addresses_distance/hexgrid-${i}.geojson`)));
  let contentDriving = JSON.parse(fs.readFileSync(path.join(__dirname, `source/destinations_hexgrid-addresses_distance/hexgrid-${i}-driving.geojson`)));
  
  let outTransit = contentTransit.features.map(mapProp);
  let outDriving = contentDriving.features.map(mapProp);

  outTransit = {
    properties: {
      stats: getStats(contentTransit.features, 'transit')
    },
    features: outTransit
  };
  outDriving = {
    properties: {
      stats: getStats(contentDriving.features, 'driving')
    },
    features: outDriving
  };

  fs.writeFileSync(path.join(__dirname, `destinations-data/${placeId}-transit.json`), JSON.stringify(outTransit));
  fs.writeFileSync(path.join(__dirname, `destinations-data/${placeId}-driving.json`), JSON.stringify(outDriving));
}
