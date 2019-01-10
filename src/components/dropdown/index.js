import html from 'choo/html';
import raw from 'choo/html/raw';
import Component from 'choo/component';
import style from './style.css';
import merge from '../../utils/merge';
import nanostate from 'nanostate';

export default class Dropdown extends Component {
  constructor (id, state, emit) {
    super(id, state, emit);
    this.state = state;
    this.emit = emit;
    this.local = state.components[id] = merge([{
      text: 'Select',
      value: 'CA',
      items: [ // [label, value]
        ['Iowa', 'IA'],
        ['California', 'CA']
      ]
    }, state.components && state.components[id] ? state.components[id] : {}]);
    this.setState();
    style.use();

    this.machine = nanostate('select', {
      select: { click: 'open' },
      open: {
        clickItem: 'select',
        type: 'search'
      },
      search: { updateList: 'open' }
    });
  }

  setState () {
    
  }

  load (element) {
    
  }

  update () {
    let dirty = false;
    


    if (dirty) {
      this.setState();
    }
    return dirty;
  }

  createElement () {
    const s = this.local;
    return html`
    <div class="ui search dropdown selection active visible" style="border: 1px solid black;">
      <select>
        <option value="">Select</option>
        ${raw(s.items.map((it) => `<option value="${it[1]}">${it[0]}</option>`).join(''))}
      </select>
      <i class="dropdown icon"></i>
      <input class="search" autocomplete="off" tabindex="0">
      <div class="default text">Select</div>
      <div class="menu transition visible" tabindex="-1" style="display: block !important;">
        ${raw(s.items.map((it) => `<div class="item ${it[1] === s.value ? 'selected' : ''}" data-value="${it[1]}">${it[0]}</div>`).join(''))}
      </div>
    </div>`;
  }
}
