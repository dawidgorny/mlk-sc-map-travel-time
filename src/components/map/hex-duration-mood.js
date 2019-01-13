const parkTime = -7;

export default function hexDurationMood (mode, duration) {
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

  let mood = 0;

  if (duration > level0) {
    mood = 1;
  }

  if (duration > level1) {
    mood = 2;
  }

  if (duration > level2) {
    mood = 3;
  }

  if (duration > level3) {
    mood = 4;
  }

  return mood;
}
