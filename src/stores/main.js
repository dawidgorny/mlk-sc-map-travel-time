import centroid from '@turf/centroid';

export default function mainStore (state, emitter) {
  state.components = {};
  state.main = {
    loading: true
  };
  

  emitter.on('DOMContentLoaded', function () {
    emitter.on('map:load', mapLoad);
    emitter.on('map:assetsLoad', () => { mapAssetsLoad() });
    emitter.on('mode-switch:valueChange', modeSwitchValueChange);
    emitter.on('destination:valueChange', destinationValueChange);
    emitter.on('address-search:value', addressSearchValue);
    emitter.on('map:featureClick', mapFeatureClick);
  });

  function mapLoad () {
    // state.main.loading = false;
    render();
  }

  function mapAssetsLoad () {
    state.main.loading = false;
    state.components['loading-overlay'].visible = false;
    state.components['destination'].items = state.components['map'].destinations.map((d) => [d.label, d.id]);
    state.components['destination'].value = state.components['map'].destinations[1].id;
    state.components['destination'].text = state.components['map'].destinations[1].label;
    state.components['map'].destinationId = state.components['destination'].value;
    render();
  }

  function modeSwitchValueChange (value) {
    state.components['map'].mode = value;
    render();
  }

  function destinationValueChange (value) {
    state.components['map'].destinationId = value;
    render();
  }

  function addressSearchValue (value, label) {
    state.components['map'].hilightCoordinates = value;
    render();
  }

  function mapFeatureClick (feature) {
    const prop = feature.properties;
    console.log(feature.properties);
    const tooltip = state.components['tooltip'];
    tooltip.visible = true;
    tooltip.districtName = prop['district_full_text'];
    tooltip.addressCount = prop['address_count'];
    tooltip.durationValue = prop['duration_value'];
    tooltip.durationText = prop['duration_text'];
    tooltip.durationMood = prop['duration_mood'];
    
    // TODO: move only if far from current coordinates
    const center = centroid(feature.geometry);
    state.components['map'].hilightCoordinates = center.geometry.coordinates;
    render();
  }
  
  function render () {
    emitter.emit('render');
  }
}
