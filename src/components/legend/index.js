import html from 'choo/html';
import raw from 'choo/html/raw';
import Component from 'choo/component';
import style from './style.css';
import merge from '../../utils/merge';
import nanostate from 'nanostate';

import sectionElement from './section-element';

import IcoMood1Image from '../../images/ico-mood-1.svg';
import IcoMood2Image from '../../images/ico-mood-2.svg';
import IcoMood3Image from '../../images/ico-mood-3.svg';
import IcoMood4Image from '../../images/ico-mood-4.svg';

const palette = require('./palette');

export default class Legend extends Component {
  constructor (id, state, emit) {
    super(id, state, emit);
    this.id = id;
    this.state = state;
    this.emit = emit;
    this.isDirty = false;
    this.local = state.components[id] = merge([{
      values: [0, 0, 0, 0],
      minPieceWidth: 1,
      piecePadding: 1,
      totalWidth: 736
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

    const w = l.totalWidth;
    const minPercent = Math.ceil((l.minPieceWidth / parseFloat(w)) * 100.0);
    let val = l.values.slice();
    val = val.map((x, i) => { return { i, v: x }; });
    val = val.sort((a, b) => a.v - b.v);

    for (let x of val) {
      if (x.v < minPercent) {
        val[val.length - 1].v -= minPercent - x.v;
        x.v = minPercent;
      }
    }

    val = val.sort((a, b) => a.i - b.i);
    val = val.map((x) => x.v);

    let sum = val.reduce((a, c) => a + c);

    return html`
    <div class="${sl['legend']} ${sum < 100 ? 'dn' : ''}">
     ${sectionElement(0, l.values[0], val[0], l['assetsPathPrefix'] + IcoMood1Image, palette['scale1'])}
     ${sectionElement(1, l.values[1], val[1], l['assetsPathPrefix'] + IcoMood2Image, palette['scale2'])}
     ${sectionElement(2, l.values[2], val[2], l['assetsPathPrefix'] + IcoMood3Image, palette['scale3'])}
     ${sectionElement(3, l.values[3], val[3], l['assetsPathPrefix'] + IcoMood4Image, palette['scale4'])}
    </div>`;
  }
}
