import html from 'choo/html';
import raw from 'choo/html/raw';
import Component from 'choo/component';
import style from './style.css';
import merge from '../../utils/merge';
import nanostate from 'nanostate';

import { geocode } from '../../utils/mapbox-api';

export default class AddressSearch extends Component {
  constructor (id, state, emit) {
    super(id, state, emit);
    this.id = id;
    this.state = state;
    this.emit = emit;
    this.isDirty = false;
    this.local = state.components[id] = merge([{
      text: '',
      value: [],
      items: [ /* ... , [label, value], ... */ ]
    }, state.components && state.components[id] ? state.components[id] : {}]);
    this.setState();
    style.use();

    this.machine = nanostate('select', {
      select: { click: 'open' },
      open: {
        clickItem: 'select',
        type: 'search'
      },
      search: { updateList: 'open' }
    });
  }

  setState () {
    
  }

  load (element) {
    
  }

  update () {
    let dirty = this.isDirty | false;
    console.log(dirty);


    if (dirty) {
      this.setState();
    }
    this.isDirty = false;
    return dirty;
  }

  createElement () {
    const s = this.local;

    let searchDelay = null;
    const onInputChange = (e) => {
      let query = e.target.value;
      s.text = query;

      /* We use timeout so we dont abuse the api. API query will happen 0.5 second after finished typing */
      if (searchDelay) clearTimeout(searchDelay);
      searchDelay = setTimeout(async () => {
        let ret = await this._search(query);
        console.log(ret);
        s.items = ret.map((it) => {
          return [it.label, JSON.stringify(it.coordinates)];
        });
        this._updateList(ret);
        this.isDirty = true;
        this.emit('render');
      }, 500);
    };

    const onItemClick = (e) => {
      let label = e.target.innerText;
      let value = JSON.parse(e.target.getAttribute('data-value'));
      this.local.text = label;
      this.local.value = value;
      this.emit(`${this.id}:value`, value, label);
      return false;
    };

    return html`
    <div class="" style="border: 1px solid black;">
      <input class="" autocomplete="off" tabindex="0" value="${s.text}" onchange=${onInputChange} onkeyup=${onInputChange}>
      <input class="" autocomplete="off" tabindex="0" value="${JSON.stringify(s.value)}">
      <div class="">Address</div>
      <div class="" tabindex="-1" style="display: block !important;">
        ${s.items.map((it) => html`<div class="${it[1] === s.value ? 'selected' : ''}" data-value="${it[1]}" onclick="${onItemClick}">${it[0]}</div>`)}
      </div>
    </div>`;
  }

  async _search (query) {
    if (!query || query.length === 0) return []; /* return empty results if query is empty */
    let ret = await geocode(this.local.mapboxAccessToken, query, {
      bbox: [18.723632, 50.034461, 20.023632, 50.734461],
      types: ['address'],
      autocomplete: true,
      limit: 4,
      country: 'pl',
      language: 'pl'
    }).json();
    ret = ret.features.map((f) => {
      let label = f.place_name_pl;
      label = label.replace(', Polska', '');
      label = label.replace(', województwo śląskie', '');
      return {
        label,
        coordinates: f.geometry.coordinates
      };
    });
    return ret;
  }

  _updateList (listData) {

  }
}
