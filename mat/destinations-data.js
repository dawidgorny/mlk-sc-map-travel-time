const fs = require('fs');
const path = require('path');
const findBin = require('../src/utils/find-bin');
const durationMood = require('../src/components/map/hex-duration-mood');

const parkTime = 7;

let destinations = JSON.parse(fs.readFileSync(path.join(__dirname, `source/destinations_hexgrid-addresses_distance/destinations.geojson`))).features.map((f) => f.properties);

function mapProp (f) {
  const prop = {
    'cell-id': f.properties['cell-id'],
    'duration_text': f.properties['duration_text'],
    'duration_value': f.properties['duration_value'],
    'duration_value_minutes': f.properties['duration_value_minutes'],
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

  features.forEach((f) => {
    let duration = f['duration_value_minutes'];
    if (duration > -1) {
      let mood = durationMood(mode, duration);
      if (mood === 3) {
        stat4num++;
      } else if (mood === 2) {
        stat3num++;
      } else if (mood === 1) {
        stat2num++;
      } else if (mood === 0) {
        stat1num++;
      }
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
  let hexgridId = parseInt(destinations[i]['layer_id'].replace('hexgrid-', ''));

  let contentTransit = JSON.parse(fs.readFileSync(path.join(__dirname, `source/destinations_hexgrid-addresses_distance/hexgrid-${hexgridId}.geojson`)));
  let contentDriving = JSON.parse(fs.readFileSync(path.join(__dirname, `source/destinations_hexgrid-addresses_distance/hexgrid-${hexgridId}-driving.geojson`)));

  contentTransit.features.forEach((f) => {
    let v = f['properties']['duration_value'];
    let h = Math.floor(v / (60 * 60));
    let m = Math.round((v - (h * 60 * 60)) / 60);
    f['properties']['duration_value_minutes'] = m + h * 60;
  });

  contentDriving.features.forEach((f) => {
    let v = f['properties']['duration_value'];
    v = v > -1 ? v + parkTime * 60 : v;
    let h = Math.floor(v / (60 * 60));
    let m = Math.round((v - (h * 60 * 60)) / 60);
    f['properties']['duration_value_minutes'] = m + h * 60;
    f['properties']['duration_value'] = f['properties']['duration_value_minutes'] * 60;
    f['properties']['duration_text'] = h > 0 ? `${h} h ${m} min` : `${m} min`;
  });
  
  let outTransit = contentTransit.features.map(mapProp);
  let outDriving = contentDriving.features.map(mapProp);

  outTransit = {
    properties: {
      stats: getStats(outTransit, 'transit')
    },
    features: outTransit
  };
  outDriving = {
    properties: {
      stats: getStats(outDriving, 'driving')
    },
    features: outDriving
  };

  fs.writeFileSync(path.join(__dirname, `destinations-data/${placeId}-transit.json`), JSON.stringify(outTransit));
  fs.writeFileSync(path.join(__dirname, `destinations-data/${placeId}-driving.json`), JSON.stringify(outDriving));
}
