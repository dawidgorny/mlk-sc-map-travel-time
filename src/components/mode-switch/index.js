import html from 'choo/html';
import raw from 'choo/html/raw';
import Component from 'choo/component';
import style from './style.css';
import merge from '../../utils/merge';
import nanostate from 'nanostate';

import TramBlueImage from './tram-blue.svg';
import CarBlueImage from './car-blue.svg';

export default class ModeSwitch extends Component {
  constructor (id, state, emit) {
    super(id, state, emit);
    this.id = id;
    this.state = state;
    this.emit = emit;
    this.isDirty = false;
    this.local = state.components[id] = merge([{
      value: 'transit'
    }, state.components && state.components[id] ? state.components[id] : {}]);
    this.setState();
    style.use();
  }

  setState () {
    
  }

  load (element) {
    
  }

  update () {
    let dirty = this.isDirty | false;
    
    if (dirty) {
      this.setState();
    }
    return dirty;
  }

  createElement () {
    const s = this.local;

    const onClick = (e) => {
      const value = e.currentTarget.getAttribute('data-toggle-value');
      s.value = value;
      this.isDirty = true;
      this.emit('render');
      this.emit(`${this.id}:valueChange`, value);
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    return html`
    <div class="fl pr0 pt3 ${style.locals['mode-switch']}">
      <a data-toggle-value="transit" class="pl0 pr2 fl ${s.value === 'transit' ? style.locals['active'] : ''}" href="#" onclick=${onClick}><img src="${TramBlueImage}" width="60" height="29"></a>
      <a data-toggle-value="driving" class="pl0 pr0 fl ${s.value === 'driving' ? style.locals['active'] : ''}" href="#" onclick=${onClick}><img src="${CarBlueImage}" width="60" height="29"></a>
    </div>`;
  }
}
