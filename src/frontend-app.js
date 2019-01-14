import choo from 'choo';
import mainStore from './stores/main';
import mainView from './views/main';
import styles from './app.css';

styles.use();

export default class FrontentApp {
  constructor (mapContainer, mapStyle, mapboxAccessToken, translation) {
    this.mapContainer = mapContainer;
    this.app = choo();
    if (process.env.NODE_ENV !== 'production') {
      this.app.use(require('choo-devtools')());
    }
    this.app.use(mainStore);
    this.app.use((state, emitter) => {
      state.translation = translation;
      state.components['map'] = {
        mapboxAccessToken,
        style: mapStyle
      };
      state.components['address-search'] = {
        mapboxAccessToken
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
