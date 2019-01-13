import html from 'choo/html';
import raw from 'choo/html/raw';
import Component from 'choo/component';
import style from './style.css';
import merge from '../../utils/merge';

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
  }

  load (element) {
  }

  update () {
    console.log('update');
    return true;
  }

  createElement () {
    const l = this.local;


    console.log('createElement');
    if (l.items.length > 0) console.log(l.items[0][1], '===', l.value);

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
    <div class="fl ph0 db" style="border: 1px solid black;">
      <select onchange=${onSelectChange}>
        ${raw(l.items.map((it) => `<option value="${it[1]}" ${it[1] === l.value ? 'selected' : ''}>${it[0]}</option>`).join(''))}
      </select>
      <input class="search dn" autocomplete="off" tabindex="0">
      <div class="menu transition visible dn" tabindex="-1" style="">
        ${raw(l.items.map((it) => `<div class="item ${it[1] === l.value ? 'selected' : ''}" data-value="${it[1]}">${it[0]}</div>`).join(''))}
      </div>
    </div>`;
  }
}
