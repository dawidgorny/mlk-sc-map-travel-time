import html from 'choo/html';
import raw from 'choo/html/raw';
import Component from 'choo/component';
import style from './style.css';
import merge from '../../utils/merge';
import nanostate from 'nanostate';

import { geocode as geocodeMapbox } from '../../utils/mapbox-api';

import IcoSearchImage from './ico-search.svg';

let initGoogleMapsAutocompleteReady = false;
let initGoogleMapsAutocompleteInitialized = false;

window.initGoogleMapsAutocomplete = () => {
  initGoogleMapsAutocompleteReady = true;
};

export default class AddressSearch extends Component {
  constructor (id, state, emit) {
    super(id, state, emit);
    this.id = id;
    this.state = state;
    this.emit = emit;
    this.isDirty = false;
    this.local = state.components[id] = merge([{
      assetsPathPrefix: '',
      visible: false,
      text: '',
      value: [],
      items: [ /* ... , [label, value], ... */ ],
      bbox: [18.909330207135934, 50.16298654333147, 19.118374382500072, 50.29340052573354],
      newBBox: false
    }, state.components && state.components[id] ? state.components[id] : {}]);
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

  load (element) {
    
  }

  update () {
    if (this.local.newBBox && this.autocomplete) {
      let bbox = this.local.bbox;
      let sw = new google.maps.LatLng(bbox[1], bbox[0]);
      let ne = new google.maps.LatLng(bbox[3], bbox[2]);
      let bounds = new google.maps.LatLngBounds(sw, ne);
      this.autocomplete.setBounds(bounds);
      this.local.newBBox = false;
    }
    return true;
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
        ret = ret.filter((it) => it.label.indexOf('Katowice') > -1 ? it : false);
        l.items = ret.map((it) => {
          return [it.label, JSON.stringify(it.coordinates)];
        });
        this._updateList(ret);
        this.isDirty = true;
        this.emit('render');
      }, 600);
    };

    const onItemClick = (e) => {
      let label = e.target.innerText;
      let value = JSON.parse(e.target.getAttribute('data-value'));
      // this.local.text = label;
      this.local.value = value;
      if (searchDelay) clearTimeout(searchDelay);
      this._resetInput();
      this.emit(`${this.id}:value`, value.slice(), label + '');
      return true;
    };

    const onSearchButtonClick = (e) => {
      if (searchDelay) clearTimeout(searchDelay);
      this._resetInput();
      this.element.querySelector(`input.${sl['input-field']}`).focus();
    };

    return html`
    <div class="absolute top-0 left-0 pt3 pb1 pr3 ${sl['address-search']} ${l.visible ? '' : 'dn'}" style="">
      <p class="w-100 bb pb1 ma0 ${sl['input-field-container']}" style="border-color: #10069F;background-image:url(${l['assetsPathPrefix'] + IcoSearchImage})">
        <input class="input-reset ${sl['input-field']}" autocomplete="off" tabindex="0" value="${l.text}">
      </p>
      <div class="mv2 ${sl['results']}">
        ${l.items.map((it) => html`<a class="pv1 dib w-100 link ${it[1] === l.value ? 'selected' : ''}" data-value="${it[1]}" onclick=${onItemClick}>${it[0]}</div>`)}
      </div>
    </div>`;
  }

  afterupdate (element) {
    if (initGoogleMapsAutocompleteReady && !initGoogleMapsAutocompleteInitialized) {
      initGoogleMapsAutocompleteInitialized = true;

      let bbox = this.local.bbox;
      let sw = new google.maps.LatLng(bbox[1], bbox[0]);
      let ne = new google.maps.LatLng(bbox[3], bbox[2]);
      let bounds = new google.maps.LatLngBounds(sw, ne);

      // Create the autocomplete object, restricting the search to geographical
      // location types.
      // https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions
      this.autocomplete = new google.maps.places.Autocomplete(element.querySelector(`input.${style.locals['input-field']}`), {
        bounds,
        fields: ['formatted_address', 'geometry.location', 'name', 'vicinity'],
        types: ['address']
      });
      
      this.autocomplete.addListener('place_changed', () => {
        let place = this.autocomplete.getPlace();
        if (place['geometry']) {
          let loc = place['geometry']['location'];

          let value = [loc.lng(), loc.lat()];
          let label = place['formatted_address'];
          this.emit(`${this.id}:value`, value.slice(), label + '');
        }
      });
      
    }
  }

  _resetInput () {
    this.local.text = '';
    this.local.value = [];
    this.local.items = [];
    this.rerender();
  }

  async _search (query) {
    return [];
    // return this._searchMapbox(query);
  }

  async _searchMapbox (query) {
    if (!query || query.length === 0) return []; /* return empty results if query is empty */
    let ret = await geocodeMapbox(this.local.mapboxAccessToken, query, {
      bbox: this.local.bbox,
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
