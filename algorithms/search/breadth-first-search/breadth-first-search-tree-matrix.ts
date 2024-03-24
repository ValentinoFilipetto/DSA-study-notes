declare type WeightedAdjacencyMatrix = number[][]; /**  A number means weight */

/** Input example */

/**
    >(1)<--->(4) ---->(5)
   /          |       /|
(0)     ------|------- |
   \   v      v        v
    >(2) --> (3) <----(6)


export const matrix2: WeightedAdjacencyMatrix = [
    [0, 3, 1,  0, 0, 0, 0], // 0
    [0, 0, 0,  0, 1, 0, 0],
    [0, 0, 7,  0, 0, 0, 0],
    [0, 0, 0,  0, 0, 0, 0],
    [0, 1, 0,  5, 0, 2, 0],
    [0, 0, 18, 0, 0, 0, 1],
    [0, 0, 0,  1, 0, 0, 1],
];
*/

export default function bfs(
  graph: WeightedAdjacencyMatrix,
  source: number,
  needle: number
): number[] | null {
  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);

  seen[source] = true;
  const q = [source];

  do {
    let curr = q.shift() as number;
    if (curr === needle) {
      break;
    }

    const adjs = graph[curr];
    for (let i = 0; i < adjs.length; ++i) {
      if (adjs[i] === 0) {
        continue;
      }

      if (seen[i]) {
        continue;
      }

      prev[i] = curr;
      q.push(i);
    }
    seen[curr] = true;
  } while (q.length);

  /** If we didn't find the needle */
  if (prev[needle] === -1) {
    return null;
  }

  let curr = needle;
  let out: number[] = [];

  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  return [source].concat(out.reverse());
}
