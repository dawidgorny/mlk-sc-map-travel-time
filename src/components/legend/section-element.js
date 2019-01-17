import html from 'choo/html';

export default function sectionElement (percentValue, percentWidth, icofile, color) {
  return html`
  <div class="fl" style="width: ${percentWidth}%; padding-right: 1px;">
    <div style="background-color: ${color}; height: 8px;"></div>
    <img class="fl pv2" src=${icofile} style="min-width: 14px;">
    <span class="fl w-100" style="color: ${color};">${percentValue < 1 ? '<1' : percentValue}%</span>
  </div>`;
}
