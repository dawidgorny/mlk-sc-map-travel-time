const fs = require('fs');
const path = require('path');

let content = JSON.parse(fs.readFileSync(path.join(__dirname, 'source/destinations_hexgrid-addresses_distance/hexgrid-0.geojson')));
let districts = JSON.parse(fs.readFileSync(path.join(__dirname, 'source/hex_district_names.json')));

console.log(content.features[0]);

content.features = content.features.map((f) => {
  let cellId = f.properties['cell-id'];

  let districtFullText = '';
  for (let i = 0; i < districts.length; i++) {
    if (districts[i]['cell.id'] === cellId) {
      districtFullText = districts[i]['district_full'];
      break;
    }
  }

  const prop = {
    'cell-id': cellId,
    'district_full_text': districtFullText
  };
  f.properties = prop;
  return f;
})


console.log(content.features[0]);

fs.writeFileSync(path.join(__dirname, 'hexgrid.geojson'), JSON.stringify(content));
