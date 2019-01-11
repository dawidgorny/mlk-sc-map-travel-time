const fs = require('fs');
const path = require('path');

let content = JSON.parse(fs.readFileSync(path.join(__dirname, 'source/destinations_hexgrid-addresses_distance/destinations.geojson')));

console.log(content.features[0]);
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

content.features.splice(12, 1); // remove 13th element

console.log(content.features[0]);
console.log(content.features.length);

fs.writeFileSync(path.join(__dirname, 'destinations.geojson'), JSON.stringify(content));
