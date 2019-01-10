import html from 'choo/html';
import Component from 'choo/component';
import style from './style.css';
import merge from '../../utils/merge';
import nanostate from 'nanostate';

export default class Dropdown extends Component {
  constructor (id, state, emit) {
    super(id, state, emit);
    this.state = state;
    this.emit = emit;
    this.local = state.components[id] = merge([{
      
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
    let dirty = false;
    


    if (dirty) {
      this.setState();
    }
    return dirty;
  }

  createElement () {
    const s = this.local;
    return html`
    <div class="ui search dropdown selection active visible" style="border: 1px solid black;">
      <select>
        <option value="">State</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>
      <i class="dropdown icon"></i>
      <input class="search" autocomplete="off" tabindex="0">
      <div class="default text">State</div>
      <div class="menu transition visible" tabindex="-1" style="display: block !important;">
        <div class="item selected" data-value="AL">Alabama</div>
        <div class="item" data-value="AK">Alaska</div>
        <div class="item" data-value="AZ">Arizona</div>
        <div class="item" data-value="AR">Arkansas</div>
        <div class="item" data-value="CA">California</div>
        <div class="item" data-value="CO">Colorado</div>
        <div class="item" data-value="CT">Connecticut</div>
        <div class="item" data-value="DE">Delaware</div>
        <div class="item" data-value="DC">District Of Columbia</div>
        <div class="item" data-value="FL">Florida</div>
        <div class="item" data-value="GA">Georgia</div>
        <div class="item" data-value="HI">Hawaii</div>
        <div class="item" data-value="ID">Idaho</div>
        <div class="item" data-value="IL">Illinois</div>
        <div class="item" data-value="IN">Indiana</div>
        <div class="item" data-value="IA">Iowa</div>
        <div class="item" data-value="KS">Kansas</div>
        <div class="item" data-value="KY">Kentucky</div>
        <div class="item" data-value="LA">Louisiana</div>
        <div class="item" data-value="ME">Maine</div>
        <div class="item" data-value="MD">Maryland</div>
        <div class="item" data-value="MA">Massachusetts</div>
        <div class="item" data-value="MI">Michigan</div>
        <div class="item" data-value="MN">Minnesota</div>
        <div class="item" data-value="MS">Mississippi</div>
        <div class="item" data-value="MO">Missouri</div>
        <div class="item" data-value="MT">Montana</div>
        <div class="item" data-value="NE">Nebraska</div>
        <div class="item" data-value="NV">Nevada</div>
        <div class="item" data-value="NH">New Hampshire</div>
        <div class="item" data-value="NJ">New Jersey</div>
        <div class="item" data-value="NM">New Mexico</div>
        <div class="item" data-value="NY">New York</div>
        <div class="item" data-value="NC">North Carolina</div>
        <div class="item" data-value="ND">North Dakota</div>
        <div class="item" data-value="OH">Ohio</div>
        <div class="item" data-value="OK">Oklahoma</div>
        <div class="item" data-value="OR">Oregon</div>
        <div class="item" data-value="PA">Pennsylvania</div>
        <div class="item" data-value="RI">Rhode Island</div>
        <div class="item" data-value="SC">South Carolina</div>
        <div class="item" data-value="SD">South Dakota</div>
        <div class="item" data-value="TN">Tennessee</div>
        <div class="item" data-value="TX">Texas</div>
        <div class="item" data-value="UT">Utah</div>
        <div class="item" data-value="VT">Vermont</div>
        <div class="item" data-value="VA">Virginia</div>
        <div class="item" data-value="WA">Washington</div>
        <div class="item" data-value="WV">West Virginia</div>
        <div class="item" data-value="WI">Wisconsin</div>
        <div class="item" data-value="WY">Wyoming</div>
      </div>
    </div>`;
  }
}