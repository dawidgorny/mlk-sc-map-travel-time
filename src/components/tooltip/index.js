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
    style.use();
  }

  load (element) {
    
  }

  update () {
    console.log('tooltip:update', this.local)
    return true;
  }

  createElement () {
    console.log('tooltip:createElement', this.local)
    const l = this.local;
    const sl = style.locals;

    let ico = '';
    if (l.durationMood > 0) ico = IcoMood1Image;
    if (l.durationMood > 1) ico = IcoMood2Image;
    if (l.durationMood > 2) ico = IcoMood3Image;
    if (l.durationMood > 3) ico = IcoMood4Image;

    return html`
    <div class="absolute top-0 left-0 w-50 ph5 ${l.visible ? '' : 'dn'} ${sl['tooltip']}">
      <p class="bb">${l.districtName}</p>
      <p>adresy w tym obszarze: <strong>${l.addressCount}</strong></p>
      <p>czas dojazdu: <strong>${l.durationText}</strong><img src=${ico}></p>
    </div>`;
  }
}
