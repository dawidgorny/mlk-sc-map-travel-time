import html from 'choo/html';
import LoadingOverlay from '../components/loading-overlay';
import Map from '../components/map';
import Dropdown from '../components/dropdown';
import AddressSearch from '../components/address-search';
import ModeSwitch from '../components/mode-switch';

export default function mainView (state, emit) {
  return html`
    <div class="relative db w-100 h-100">
      ${state.cache(ModeSwitch, 'mode-switch').render()}
      ${state.cache(Dropdown, 'destination').render()}
      ${state.cache(AddressSearch, 'address-search').render()}
      ${state.cache(Map, 'map').render()}
      ${state.cache(LoadingOverlay, 'loading-overlay').render()}
    </div>
  `;
}
