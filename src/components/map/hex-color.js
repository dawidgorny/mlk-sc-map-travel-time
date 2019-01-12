const parkTime = -7;
const level0Color = 'hsl(244, 61%, 48%)';
const level1Color = 'rgb(242,242,242)';
const level2Color = 'rgb(255,169,163)';
const level3Color = 'rgb(255,65,51)';

export default function hexColor (mode, duration) {
  let level0 = -1;
  let level1 = 17 * 60;
  let level2 = 37 * 60;
  let level3 = 58 * 60;

  if (mode === 'driving') {
    level0 = -1;
    level1 = (17 + parkTime) * 60;
    level2 = (23 + parkTime) * 60;
    level3 = (30 + parkTime) * 60;
  }

  let color = '#ffffff';

  if (duration > level0) {
    color = level0Color;
  }

  if (duration > level1) {
    color = level1Color;
  }

  if (duration > level2) {
    color = level2Color;
  }

  if (duration > level3) {
    color = level3Color;
  }

  return color;
}
