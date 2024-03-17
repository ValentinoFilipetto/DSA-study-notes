/**
 * The complexity of this algorithm is between O(log N) and O(h),
 * where h is the height, depending on how balanced the tree is.
 * In the recursion step we can clearly see how the binary search tree
 * comes into play.
 */

type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};

function search(curr: BinaryNode<number> | null, needle: number): boolean {
  if (!curr) {
    return false;
  }

  if (curr.value === needle) {
    return true;
  }

  if (curr.value < needle) {
    return search(curr.right, needle);
  } else {
    return search(curr.left, needle);
  }
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  return search(head, needle);
}
