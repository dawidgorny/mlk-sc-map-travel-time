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
  console.log(style);
  const sl = style.locals;
  return html`
    <div class=" db w-100 h-100">
      <div class="flex flex-wrap-reverse db w-100">
        <div class="fl pl5 pr1 ${sl['mode-switch-container']}">
          ${state.cache(ModeSwitch, 'mode-switch').render()}
        </div>
        <div class="fl ph0 ${sl['dropdown-container']}">
          ${state.cache(Dropdown, 'destination').render()}
        </div>
      </div>
      <div class="relative dib w-100 h-100">
        ${state.cache(Map, 'map').render()}
        ${state.cache(AddressSearch, 'address-search').render()}
        <div class="absolute top-0 left-0 w-100 h-100 ${sl['tooltip-container']}">
          ${this.state.cache(Tooltip, 'tooltip').render()}
        </div>
        ${this.state.cache(LoadingOverlay, 'loading-overlay').render()}
      </div>
      <div class="flex flex-wrap-reverse w-100 ph2 pt2">
        <div class="fl ph1" style="width: 20rem;"><p> </p></div>
        <div class="fl pl0 pr0 db ${sl['legend-container']}">
          ${this.state.cache(Legend, 'legend').render()}
        </div>
      </div>
    </div>
  `;
}
