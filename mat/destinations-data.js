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

for (let i = 0; i < destinations.length; i++) {
  if (i === 12) continue; // skip 13th element
  let placeId = destinations[i]['place-id'];

  let contentTransit = JSON.parse(fs.readFileSync(path.join(__dirname, `source/destinations_hexgrid-addresses_distance/hexgrid-${i}.geojson`)));
  let contentDriving = JSON.parse(fs.readFileSync(path.join(__dirname, `source/destinations_hexgrid-addresses_distance/hexgrid-${i}-driving.geojson`)));

  let outTransit = contentTransit.features.map(mapProp);
  let outDriving = contentDriving.features.map(mapProp);

  fs.writeFileSync(path.join(__dirname, `destinations-data/${placeId}-transit.json`), JSON.stringify(outTransit));
  fs.writeFileSync(path.join(__dirname, `destinations-data/${placeId}-driving.json`), JSON.stringify(outDriving));
}
