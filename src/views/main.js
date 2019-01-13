import html from 'choo/html';
import Map from '../components/map';
import Dropdown from '../components/dropdown';
import AddressSearch from '../components/address-search';
import ModeSwitch from '../components/mode-switch';
import Tooltip from '../components/tooltip';
import LoadingOverlay from '../components/loading-overlay';

export default function mainView (state, emit) {
  return html`
    <div class="relative db w-100 h-100">
      ${state.cache(ModeSwitch, 'mode-switch').render()}
      ${state.cache(Dropdown, 'destination').render()}
      ${state.cache(AddressSearch, 'address-search').render()}
      <div class="relative db w-100 h-100">
        ${state.cache(Map, 'map').render()}
        ${this.state.cache(Tooltip, 'tooltip').render()}
        ${this.state.cache(LoadingOverlay, 'loading-overlay').render()}
      </div>
    </div>
  `;
}
