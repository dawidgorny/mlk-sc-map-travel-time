import html from 'choo/html';
import raw from 'choo/html/raw';
import Component from 'choo/component';
import style from './style.css';
import merge from '../../utils/merge';

const AccessibleDropdown = require('./local_modules/accessible-dropdown');

export default class Dropdown extends Component {
  constructor (id, state, emit) {
    super(id, state, emit);
    this.id = id;
    this.state = state;
    this.emit = emit;
    this.local = state.components[id] = merge([{
      text: '',
      value: '',
      items: [ /* [label, value] */ ]
    }, state.components && state.components[id] ? state.components[id] : {}]);
    style.use();
    this._accessibleDropdownOptions = [];
    this._initialized = false;
  }

  load (element) {
    
  }

  update () {
    if (!this._initialized && this.local.items.length > 0) {
      return true;
    }
    return false;
  }

  createElement () {
    const l = this.local;
    const sl = style.locals;

    const onSelectChange = (e) => {
      let value = e.target.value;
      this.local.value = value;
      for (let i = 0; i < this.local.items.length; i++) {
        if (this.local.items[i][1] === value) {
          this.local.text = this.local.items[i][0];
          break;
        }
      }
      this.emit(`${this.id}:valueChange`, value);
    };

    return html`
    <div class="fl ph0 db w-50 ${sl['dropdown']}" style="">
      <select onchange=${onSelectChange} class="drop-down ${this.id + '__' + sl['dropdown-control']} ${sl['dropdown-control']}" title="Destination">
        ${raw(l.items.map((it) => `<option value="${it[1]}" ${it[1] === l.value ? 'selected' : ''}>${it[0]}</option>`).join(''))}
      </select>
    </div>`;
  }

  afterupdate (element) {
    if (!this._initialized && this.local.items.length > 0) {
      this._initialized = true;

      let selectNode = element.querySelector('select.' + this.id + '__' + style.locals['dropdown-control']);

      let optionNodeList = Array.prototype.slice.call(selectNode.options);
      optionNodeList.forEach((optionNode) => {
        this._accessibleDropdownOptions.push(optionNode.innerHTML.toLowerCase().trim());
      });
      this._accessibleDropdown = new AccessibleDropdown({
        selectNode: selectNode,
        optionList: this._accessibleDropdownOptions,
        css: {
          hide: 'hide',
          pseudoSelect: 'pseudo-select drop-down',
          pseudoSelectFocus: 'pseudo-select-focus',
          options: 'options'
        }
      });
      this._accessibleDropdown.init();
    }
  }
}
