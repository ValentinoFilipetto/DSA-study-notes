/**
 * The running time for this algorithm is O(V+E), because
 * in the worst case we need to check each vertex and go
 * through each edge once.
 */

declare type GraphEdge = { to: number; weight: number };
declare type WeightedAdjacencyList = GraphEdge[][];

function walk(
  graph: WeightedAdjacencyList,
  curr: number,
  needle: number,
  seen: boolean[],
  path: number[]
): boolean {
  if (seen[curr]) {
    return false;
  }

  seen[curr] = true;

  path.push(curr);

  if (curr === needle) {
    return true;
  }

  const list = graph[curr];

  for (let i = 0; i < list.length; ++i) {
    let edge = list[i];

    if (walk(graph, edge.to, needle, seen, path)) {
      return true;
    }
  }

  path.pop();

  return false;
}

export default function dfs(
  graph: WeightedAdjacencyList,
  source: number,
  needle: number
): number[] | null {
  let seen = new Array(graph.length).fill(false);
  let path: number[] = [];

  walk(graph, source, needle, seen, path);

  if (path.length === 0) {
    return null;
  }

  return path;
}
