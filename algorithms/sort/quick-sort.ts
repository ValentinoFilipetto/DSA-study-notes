/**
 * The time complexity is O(n log n). The reason is that we
 * take a pivot in the array and put on its right all the bigger value
 * and on its left all the smaller ones, and the repeat for both sides, and
 * we go ahead until we get array containing only one element. To reach
 * one element we need to perform log n operations (as we have seen for binary search),
 * but here we perform a log n amount of n's operations in the worst case.
 * But quick sort can also be O(n^2), in case we are given a reserve-sorted array,
 * i.e. [9, 8, 7, 6, 5, ... 1] and we take 1 as pivot.
 */

function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];

  let idx = lo - 1;

  for (let i = lo; i < hi; ++i) {
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }

  idx++;
  const tmp = arr[idx];
  arr[idx] = pivot;

  return idx;
}

function qs(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) {
    return;
  }

  const pivotIdx = partition(arr, lo, hi);

  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);
}
