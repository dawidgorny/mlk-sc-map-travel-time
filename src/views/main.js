import html from 'choo/html';
import LoadingOverlay from '../components/loading-overlay';
import Map from '../components/map';

export default function mainView (state, emit) {
  return html`
    <div class="relative db w-100 h-100">
      ${state.cache(Map, 'map').render()}
      ${state.cache(LoadingOverlay, 'loading-overlay').render()}
    </div>
  `;
}
