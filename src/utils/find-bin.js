const range = require('@thi.ng/iterators').range;

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

module.exports = findBin;
