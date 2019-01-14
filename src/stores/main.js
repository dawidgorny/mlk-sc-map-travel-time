import centroid from '@turf/centroid';
import bbox from '@turf/bbox';

export default function mainStore (state, emitter) {
  state.translation = {};
  state.components = {};
  state.main = {
    loading: true
  };

  emitter.on('DOMContentLoaded', function () {
    emitter.on('map:load', mapLoad);
    emitter.on('map:assetsLoad', mapAssetsLoad);
    emitter.on('map:ready', mapReady);
    emitter.on('mode-switch:valueChange', modeSwitchValueChange);
    emitter.on('destination:valueChange', destinationValueChange);
    emitter.on('address-search:value', addressSearchValue);
    emitter.on('map:featureClick', mapFeatureClick);
    emitter.on('map:featureDeselect', mapFeatureDeselect);
    emitter.on('map:destinationSet', mapDestinationSet);
  });

  function mapLoad () {
    render();
  }

  function mapAssetsLoad (assets) {
    
    state.components['destination'].items = state.components['map'].destinations.map((d) => [state.translation.destinations[d.id] || d.label, d.id]);
    state.components['destination'].value = state.components['map'].destinations[0].id;
    state.components['destination'].text = state.components['map'].destinations[0].label;
    state.components['map'].destinationId = state.components['destination'].value;

    const hexgridBBox = bbox(assets['hexgrid.geojson']);
    state.components['address-search'].bbox = hexgridBBox;

    render();
  }

  function mapReady () {
    state.main.loading = false;
    state.components['loading-overlay'].visible = false;
    state.components['address-search'].visible = true;
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
    render();
  }

  function mapFeatureDeselect () {
    state.components['tooltip'].visible = false;
    state.components['address-search'].visible = true;
    state.components['map'].hilightCoordinates = null;
    render();
  }

  function mapDestinationSet (destination) {
    state.components['legend'].values = destination.properties.stats.slice();
    render();
  }

  function render () {
    emitter.emit('render');
  }
}
