export default function mainStore (state, emitter) {
  state.components = {};
  
  function render () {
    emitter.emit('render');
  }
}
