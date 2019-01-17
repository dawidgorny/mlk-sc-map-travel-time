import html from 'choo/html';
import Map from '../components/map';
import Dropdown from '../components/dropdown';
import AddressSearch from '../components/address-search';
import ModeSwitch from '../components/mode-switch';
import Tooltip from '../components/tooltip';
import LoadingOverlay from '../components/loading-overlay';
import Legend from '../components/legend';

import style from './main.css';

export default function mainView (state, emit) {
  style.use();
  const sl = style.locals;
  return html`
    <div class=" db w-100 h-100" style="min-width: 320px;">
      <div class="flex flex-wrap-reverse db w-100">
        <div class="fl pl5 pr1 ${sl['mode-switch-container']}">
          ${state.cache(ModeSwitch, 'mode-switch').render()}
        </div>
        <div class="fl ph0 ${sl['dropdown-container']}">
          ${state.cache(Dropdown, 'destination').render()}
        </div>
      </div>
      <div class="relative db w-100 h-100" style="padding-bottom:130px;margin-bottom: -130px;">
        ${state.cache(Map, 'map').render()}
        <div class="absolute top-0 left-0 ${sl['address-search-container']}">
          ${state.cache(AddressSearch, 'address-search').render()}
        </div>
        <div class="${sl['tooltip-container']}" style="padding-bottom:130px;">
          ${this.state.cache(Tooltip, 'tooltip').render()}
        </div>
        ${this.state.cache(LoadingOverlay, 'loading-overlay').render()}
      </div>
      <div class="flex flex-wrap-reverse w-100 ph2 pt2" style="margin-top:-70px">
        <div class="fl ph1" style="width: 20rem;"><p> </p></div>
        <div class="fl ph4 db ${sl['legend-container']}">
          ${this.state.cache(Legend, 'legend').render()}
        </div>
      </div>
    </div>
  `;
}
