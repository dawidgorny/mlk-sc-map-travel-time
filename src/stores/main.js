export default function mainStore (state, emitter) {
  console.log(state);
  
  state.components = {};
  state.main = {
    loading: true
  };
  

  emitter.on('DOMContentLoaded', function () {
    emitter.on('map:load', mapLoad);
    emitter.on('map:assetsLoad', mapAssetsLoad);
  });

  function mapLoad () {
    // state.main.loading = false;
    render();
  }

  function mapAssetsLoad (assets) {
    state.main.loading = false;
    render();
  }
  
  function render () {
    emitter.emit('render');
  }
}
