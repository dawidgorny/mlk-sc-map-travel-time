import html from 'choo/html';

export default function sectionElement (sectionIdx, percentValue, percentWidth, icofile, color) {
  const firstSectionAlignTreshold = 11;
  return html`
  <div class="fl" style="width: ${percentWidth}%; padding-right: 1px;">
    <div style="background-color: ${color}; height: 8px;"></div>
    <img class="fl pv2" src=${icofile} style="min-width: 14px;${sectionIdx === 0 && percentValue < firstSectionAlignTreshold ? 'float:right;margin-right:3px;' : ''}">
    <span class="fl w-100" style="color: ${color};min-width: fit-content;width: 100%;${sectionIdx === 0 && percentValue < firstSectionAlignTreshold ? 'float:right;margin-right:3px;' : ''}">${percentValue < 1 ? '<1' : percentValue}%</span>
  </div>`;
}
