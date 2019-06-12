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

export default class TooltipDiff extends Component {
  constructor (id, state, emit) {
    super(id, state, emit);
    this.id = id;
    this.state = state;
    this.emit = emit;
    this.isDirty = false;
    this.local = state.components[id] = merge([{
      enabled: false,
      assetsPathPrefix: '',
      visible: false,
      districtName: '',
      addressCount: 0,
      durationValue: 0,
      durationText: '',
      transitDurationText: '',
      drivingDurationText: '',
      durationMood: 0
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
    const transl = this.state.translation;

    let ico = '';
    if (l.durationMood > -1) ico = IcoMood1Image;
    if (l.durationMood > 0) ico = IcoMood2Image;
    if (l.durationMood > 1) ico = IcoMood3Image;
    if (l.durationMood > 2) ico = IcoMood4Image;

    function formatTimeText (txt) {
      return txt.toString().replace('hour', 'h').replace('mins', 'min').replace('-', '');
    }

    let info = ``;
    if (l.durationMood === 1) {
      info = transl['tooltip.diffDescriptionEqual'] || `Identyczny czas przejazdu komunikacją publiczną i samochodem (__transitDurationText__)`;
    } else if (l.durationValue > 0) {
      info = transl['tooltip.diffDescriptionSlowerTransit'] || `O <strong>__durationText__ wolniej</strong> komunikacją publiczną (__transitDurationText__) niż samochodem (__drivingDurationText__)`;
    } else {
      info = transl['tooltip.diffDescriptionFasterTransit'] || `O <strong>__durationText__ szybciej</strong> komunikacja publiczna (__transitDurationText__) niż samochodem (__drivingDurationText__)`;
    }

    info = info.replace('__durationText__', formatTimeText(l.durationText));
    info = info.replace('__transitDurationText__', formatTimeText(l.transitDurationText));
    info = info.replace('__drivingDurationText__', formatTimeText(l.drivingDurationText));

    return html`
    <div class="pt3 pb3 pl2 pr3 ${l.enabled && l.visible ? '' : 'dn'} tooltip-body ${sl['tooltip']}">
      <p class="w-100 bb pb1 ma0" style="border-color: #10069F;">${transl['tooltip.districtLabel'] || ''}<strong>${l.districtName}</strong></p>
      <div class="mv2">
        <p class="pa0 ma0">${raw(info)}</p>
      </div>
    </div>`;
  }
}
