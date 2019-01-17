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
      assetsPathPrefix: '',
      visible: false,
      value: 'transit'
    }, state.components && state.components[id] ? state.components[id] : {}]);
    style.use();
  }

  load (element) {
    
  }

  update () {
    return true;
  }

  createElement () {
    const l = this.local;
    const sl = style.locals;

    const onClick = (e) => {
      const value = e.currentTarget.getAttribute('data-toggle-value');
      l.value = value;
      this.isDirty = true;
      this.rerender();
      this.emit(`${this.id}:valueChange`, value);
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    return html`
    <div class="fl pr0 pt3 ${style.locals['mode-switch']}"  style="${l.visible ? '' : 'visibility:hidden'}">
      <a data-toggle-value="transit" class="pl0 pr2 fl ${l.value === 'transit' ? sl['active'] : ''}" href="#" onclick=${onClick}><img src="${l['assetsPathPrefix'] + TramBlueImage}" width="60" height="29"></a>
      <a data-toggle-value="driving" class="pl0 pr0 fl ${l.value === 'driving' ? sl['active'] : ''}" href="#" onclick=${onClick}><img src="${l['assetsPathPrefix'] + CarBlueImage}" width="60" height="29"></a>
    </div>`;
  }
}
