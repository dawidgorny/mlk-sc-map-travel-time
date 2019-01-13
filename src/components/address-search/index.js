import html from 'choo/html';
import raw from 'choo/html/raw';
import Component from 'choo/component';
import style from './style.css';
import merge from '../../utils/merge';
import nanostate from 'nanostate';

import { geocode } from '../../utils/mapbox-api';

import IcoSearchImage from './ico-search.svg';

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

    if (dirty) {
      this.setState();
    }
    this.isDirty = false;
    return dirty;
  }

  createElement () {
    const l = this.local;
    const sl = style.locals;

    let searchDelay = null;
    const onInputChange = (e) => {
      let query = e.target.value;
      l.text = query;

      /* We use timeout so we dont abuse the api. API query will happen 0.5 second after finished typing */
      if (searchDelay) clearTimeout(searchDelay);
      searchDelay = setTimeout(async () => {
        let ret = await this._search(query);
        l.items = ret.map((it) => {
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
      return true;
    };

    const onSearchButtonClick = (e) => {

    };

    return html`
    <div class="absolute top-0 left-0 pt3 pb1 pl5 pr3 ${sl['address-search']}" style="">
      <p class="w-100 bb pb1 ma0" style="border-color: #10069F;">
        <input class="input-reset ${sl['input-field']}" autocomplete="off" tabindex="0" value="${l.text}" onchange=${onInputChange} onkeyup=${onInputChange}>
        <button class="input-reset button-reset fr ${sl['search-button']}" onclick=${onSearchButtonClick}><img width="12" src=${IcoSearchImage}></button>
      </p>
      <div class="mv2 ${sl['results']}">
        ${l.items.map((it) => html`<a class="pv1 dib w-100 link ${it[1] === l.value ? 'selected' : ''}" data-value="${it[1]}" onclick=${onItemClick}>${it[0]}</div>`)}
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
      let labelParts = f.place_name_pl.split(',');
      let label = '';
      if (labelParts.length > 0) {
        label += labelParts[0].trim();
      }
      if (labelParts.length > 1) {
        label += ', ' + labelParts[1].trim();
      }

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
