import choo from 'choo';
import mainStore from './stores/main';
import mainView from './views/main';
import styles from './app.css';

styles.use();

export default class FrontentApp {
  constructor (mapContainer, mapStyle, mapboxAccessToken, translation, assetsPathPrefix, options = { mode: 'transit', searchEnabled: true }) {
    this.mapContainer = mapContainer;
    this.app = choo();
    if (process.env.NODE_ENV !== 'production') {
      this.app.use(require('choo-devtools')());
    }
    this.app.use(mainStore);
    this.app.use((state, emitter) => {
      state.translation = translation;
      state.components['map'] = {
        assetsPathPrefix,
        mapboxAccessToken,
        style: mapStyle,
        mode: options.mode
      };
      state.components['address-search'] = {
        enabled: options.searchEnabled,
        assetsPathPrefix,
        mapboxAccessToken
      };
      state.components['dropdown'] = {
        assetsPathPrefix
      };
      state.components['loading-overlay'] = {
        assetsPathPrefix
      };
      state.components['mode-switch'] = {
        assetsPathPrefix,
        value: options.mode,
        enabled: options.mode !== 'diff'
      };
      state.components['legend'] = {
        assetsPathPrefix,
        enabled: options.mode !== 'diff'
      };
      state.components['tooltip'] = {
        assetsPathPrefix,
        enabled: options.mode !== 'diff'
      };
      state.components['tooltip-diff'] = {
        assetsPathPrefix,
        enabled: options.mode === 'diff'
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
