import html from 'choo/html';
import Component from 'choo/component';
import style from './style.css';
import merge from '../../utils/merge';

export default class LoadingOverlay extends Component {
  constructor (id, state, emit) {
    super(id, state, emit);
    this.state = state;
    this.emit = emit;
    this.local = state.components[id] = merge([{
      visible: true
    }, state.components && state.components[id] ? state.components[id] : {}]);
    this.setState();
    style.use();
  }

  setState () {
    this.local.visible = this.state.main.loading;
  }

  load (element) {
    
  }

  update () {
    let dirty = false;
    if (this.local.visible !== this.state.main.loading) {
      dirty = true;
    }
    if (dirty) {
      this.setState();
    }
    return dirty;
  }

  createElement () {
    const s = this.local;
    return html`
    <div class="absolute top-0 left-0 w-100 h-100 pa3 tc v-mid bg-black o-60 dn ${s.visible ? '' : style.locals['fade-out']}" style="z-index:2">
      <div class="dib v-mid o-70 ${style.locals['loader-anim']}"></div>
    </div>`;
  }
}
