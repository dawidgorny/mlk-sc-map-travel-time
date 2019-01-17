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
let firstIdx = content.features.findIndex((v) => v.properties['place-id'] === '334195793031'); // Strefa Kultury id `334195793031`
let featureFirst = content.features[firstIdx];
let featuresTmp = content.features.slice();
featuresTmp.splice(firstIdx, 1);
featuresTmp.splice(0, 0, featureFirst);
content.features = featuresTmp;

console.log(content.features[1]);
console.log(content.features.length);

fs.writeFileSync(path.join(__dirname, 'destinations.geojson'), JSON.stringify(content));
