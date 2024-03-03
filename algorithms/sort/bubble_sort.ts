/**
 * The time complexity of bubble sort is O(N^2).
 * At the end of every pair of loops the highest number in the array will be at the end of it,
 * so we can reduce itss length at every iteration (- i).
 * We also have to reduce by one because we are comparing values (j and j + 1) and
 * we don't want to go off the array.
 */

export default function bubble_sort(arr: number[]): void {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        /** swap */
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}
