/**
 * This only works if the array is ordered. The time complexity is O(log N).
 * The idea is that we halve the array given the value we want to find, starting by halving
 * the array in half and deciding which side to keep checking based on the value we are seeking.
 * The worst case scenario, which defines our running time, is when we have to halve until the final array has length 1,
 * and the number it contains is the number needed; this takes log N number of steps.
 */

const binary_search = (haystack: number[], needle: number) => {
  let lo = 0;
  let hi = haystack.length;
  do {
    let m = Math.floor(lo + (hi - lo) / 2);
    let v = haystack[m];

    if (needle === v) {
      return true;
    } else if (v > needle) {
      hi = m;
    } else {
      lo = m + 1;
    }
  } while (lo < hi);

  return false;
};
