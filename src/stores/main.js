export default function mainStore (state, emitter) {
  state.components = {};
  state.main = {
    loading: true
  };
  

  emitter.on('DOMContentLoaded', function () {
    emitter.on('map:load', mapLoad);
    emitter.on('map:assetsLoad', mapAssetsLoad);
    emitter.on('mode-switch:valueChange', modeSwitchValueChange);
    emitter.on('destination:valueChange', destinationValueChange);
    emitter.on('address-search:value', addressSearchValue);
  });

  function mapLoad () {
    // state.main.loading = false;
    render();
  }

  function mapAssetsLoad (assets) {
    state.main.loading = false;
    state.components['destination'].items = state.components['map'].destinations.map((d) => [d.label, d.id]);
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
  
  function render () {
    emitter.emit('render');
  }
}
