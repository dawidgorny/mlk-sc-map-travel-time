import html from 'choo/html';
import Map from '../components/map';
import Dropdown from '../components/dropdown';
import AddressSearch from '../components/address-search';
import ModeSwitch from '../components/mode-switch';
import Tooltip from '../components/tooltip';
import LoadingOverlay from '../components/loading-overlay';
import Legend from '../components/legend';

export default function mainView (state, emit) {
  return html`
    <div class="db w-100 h-100">
      <div class="db w-100">
        ${state.cache(ModeSwitch, 'mode-switch').render()}
        ${state.cache(Dropdown, 'destination').render()}
      </div>
      <div class="relative dib w-100 h-100">
        ${state.cache(Map, 'map').render()}
        ${state.cache(AddressSearch, 'address-search').render()}
        ${this.state.cache(Tooltip, 'tooltip').render()}
        ${this.state.cache(LoadingOverlay, 'loading-overlay').render()}
      </div>
      ${this.state.cache(Legend, 'legend').render()}
    </div>
  `;
}
