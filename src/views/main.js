import html from 'choo/html';
import Map from '../components/map';

export default function mainView (state, emit) {
  return html`
    <div class="w-100 h-100">
      ${state.cache(Map, 'map').render()}
    </div>
  `;
}
