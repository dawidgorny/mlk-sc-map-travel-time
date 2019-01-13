import html from 'choo/html';
import Component from 'choo/component';
import style from './style.css';
import merge from '../../utils/merge';

export default class LoadingOverlay extends Component {
  constructor (id, state, emit) {
    super(id, state, emit);
    this.id = id;
    this.state = state;
    this.emit = emit;
    this.local = state.components[id] = merge([{
      visible: true
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
    console.log('l.visible', l.visible);
    return html`
    <div class="absolute top-0 left-0 w-100 h-100 pa3 tc v-mid bg-black o-60 ${l.visible ? '' : sl['fade-out']}" style="z-index:3">
      <div class="dib v-mid o-80 ${sl['loader-anim']}"></div>
    </div>`;
  }
}
