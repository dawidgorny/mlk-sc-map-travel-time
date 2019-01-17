const fs = require('fs');
const path = require('path');

let content = JSON.parse(fs.readFileSync(path.join(__dirname, 'source/destinations_hexgrid-addresses_distance/destinations.geojson')));

console.log(content.features[1]);
console.log(content.features.length);

content.features = content.features.map((f) => {
  const prop = {
    'place-id': f.properties['place-id'],
    'place_name': f.properties['place_name'],
    'name': f.properties['name']
  };
  f.properties = prop;
  return f;
});

// make Strefa Kultury first
let features12 = content.features[12];
let featuresTmp = content.features.slice();
featuresTmp.splice(12, 1);
featuresTmp.splice(0, 0, features12);
content.features = featuresTmp;

console.log(content.features[1]);
console.log(content.features.length);

fs.writeFileSync(path.join(__dirname, 'destinations.geojson'), JSON.stringify(content));
