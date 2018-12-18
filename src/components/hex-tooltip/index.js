import style from './style.css';
import html from 'nanohtml';

export default class HexTooltipComponent {
  constructor () {
    style.use();
    this.tree = html`
      <section class="${style.locals.component}">
        <div class="">
          <h1 class="f5">wip</h1>
        </div>
      </section>`;
  }

  get dom () {
    return this.tree;
  }
}
