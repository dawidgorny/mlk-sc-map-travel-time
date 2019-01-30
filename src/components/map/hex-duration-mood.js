import { range } from '@thi.ng/iterators';

function findBin (bins, value, right = false) {
  const incLeftEdge = (l, v, r) => l <= v && v < r;
  const incRightEdge = (l, v, r) => l < v && v <= r;
  let inBin = right ? incRightEdge : incLeftEdge;
  let ret = [...range(bins.length - 1)].map(() => false);
  for (let i = 0; i < bins.length - 1; i++) {
    ret[i] = inBin(bins[i], value, bins[i + 1]);
  }
  return ret.indexOf(true);
}

export default function hexDurationMood (mode, duration) {
  let bins = [ Number.MIN_SAFE_INTEGER, 17 * 60, 37 * 60, 58 * 60, Number.MAX_SAFE_INTEGER ];
  if (mode === 'driving') {
    bins = [ Number.MIN_SAFE_INTEGER, 16 * 60, 22 * 60, 30 * 60, Number.MAX_SAFE_INTEGER ];
    //  [ '<= 16 min', '16 - 22 min', '23 - 30 min', '> 30 min' ];
  } else if (mode === 'diff') {
    bins = [ Number.MIN_SAFE_INTEGER, -1, 0, Number.MAX_SAFE_INTEGER ];
    // 0 - ciemnoniebieski (szybciej komunikacją)
    // 1 - jasnoniebieski (bez różnicy)
    // 2 - jasnoczerwony (szybciej samochodem)
    let ret = findBin(bins, duration, true);
    // ret = ret === 2 ? 0 : ret === 0 ? 2 : 1;
    return ret;
  }
  return findBin(bins, duration, true);
}
