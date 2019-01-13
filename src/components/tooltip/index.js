import html from 'choo/html';
import raw from 'choo/html/raw';
import Component from 'choo/component';
import style from './style.css';
import merge from '../../utils/merge';
import nanostate from 'nanostate';

import IcoMood1Image from '../../images/ico-mood-1.svg';
import IcoMood2Image from '../../images/ico-mood-2.svg';
import IcoMood3Image from '../../images/ico-mood-3.svg';
import IcoMood4Image from '../../images/ico-mood-4.svg';

export default class TooltipSwitch extends Component {
  constructor (id, state, emit) {
    super(id, state, emit);
    this.id = id;
    this.state = state;
    this.emit = emit;
    this.isDirty = false;
    this.local = state.components[id] = merge([{
      visible: false,
      districtName: '',
      addressCount: 0,
      durationValue: 0,
      durationText: '',
      durationMood: 0
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

    let ico = '';
    if (s.durationMood > 0) ico = IcoMood1Image;
    if (s.durationMood > 1) ico = IcoMood2Image;
    if (s.durationMood > 2) ico = IcoMood3Image;
    if (s.durationMood > 3) ico = IcoMood4Image;

    return html`
    <div class="absolute top-0 left-0 w-50 ph5 ${style.locals['tooltip']}">
      <p class="bb">${s.districtname}</p>
      <p>adresy w tym obszarze: <strong>${s.addressCount}</strong></p>
      <p>czas dojazdu: <strong>${s.durationText}</strong><img src=${ico}></p>
    </div>`;
  }
}
