import choo from 'choo';
import html from 'choo/html';
import Map from './components/map';
import mainStore from './stores/main';
import mainView from './views/main';
import styles from './app.css';

styles.use();

export default class FrontentApp {
  constructor (mapContainer, mapStyle) {
    this.mapContainer = mapContainer;
    this.app = choo();
    if (process.env.NODE_ENV !== 'production') {
      this.app.use(require('choo-devtools')());
    }
    this.app.use(mainStore);
    this.app.use((state, emitter) => {
      state.components['map'] = {
        style: mapStyle
      };
    });
    this.app.route('*', mainView);
    this.app.mount(this.mapContainer);
  }

  _loadAssets (assets) {

  }

  _init (assets) {
    
  }

  init () {
    
  }
}
