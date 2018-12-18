/**
 * Merges objects keys and values
 * @param {array} objects - Objects to merge from left to right
 * @return {Array.<Object>} The merged object.
 */
export default function merge (objects) {
  var r = {};
  objects.forEach((o) => {
    Object.keys(o).forEach((k) => {
      r[k] = o[k];
      // TODO: deep copy instead of reference
    });
  });
  return r;
}
