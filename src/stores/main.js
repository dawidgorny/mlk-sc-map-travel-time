import centroid from '@turf/centroid';

export default function mainStore (state, emitter) {
  state.components = {};
  state.main = {
    loading: true
  };

  emitter.on('DOMContentLoaded', function () {
    emitter.on('map:load', mapLoad);
    emitter.on('map:assetsLoad', () => { mapAssetsLoad(); });
    emitter.on('map:ready', mapReady);
    emitter.on('mode-switch:valueChange', modeSwitchValueChange);
    emitter.on('destination:valueChange', destinationValueChange);
    emitter.on('address-search:value', addressSearchValue);
    emitter.on('map:featureClick', mapFeatureClick);
    emitter.on('map:featureDeselect', mapFeatureDeselect);
  });

  function mapLoad () {
    render();
  }

  function mapAssetsLoad () {
    state.components['destination'].items = state.components['map'].destinations.map((d) => [d.label, d.id]);
    state.components['destination'].value = state.components['map'].destinations[0].id;
    state.components['destination'].text = state.components['map'].destinations[0].label;
    state.components['map'].destinationId = state.components['destination'].value;
    render();
  }

  function mapReady () {
    state.main.loading = false;
    state.components['loading-overlay'].visible = false;
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
    state.components['map'].center = value.slice();
    state.components['map'].hilightFeatureAt = value.slice();
    render();
  }

  function mapFeatureClick (feature) {
    const prop = feature.properties;
    const tooltip = state.components['tooltip'];
    state.components['address-search'].visible = false;
    tooltip.visible = true;
    tooltip.districtName = prop['district_full_text'];
    tooltip.addressCount = prop['address_count'];
    tooltip.durationValue = prop['duration_value'];
    tooltip.durationText = prop['duration_text'];
    tooltip.durationMood = prop['duration_mood'];

    const center = centroid(feature.geometry);
    state.components['map'].center = center.geometry.coordinates;
    render();
  }

  function mapFeatureDeselect () {
    state.components['tooltip'].visible = false;
    state.components['address-search'].visible = true;
    state.components['map'].hilightCoordinates = null;
    render();
  }

  function render () {
    emitter.emit('render');
  }
}
