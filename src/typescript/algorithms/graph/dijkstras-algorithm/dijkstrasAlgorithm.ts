export type Graph = Record<string, Record<string, number>>;

export function dijkstrasAlgorithm(graph: Graph, start: string, end: string): number {
  const distances: Record<string, number> = {};
  const visited: Set<string> = new Set();

  for (const node of Object.keys(graph)) {
    distances[node] = Infinity;
  }
  distances[start] = 0;

  while (true) {
    let closestNode: string | null = null;
    let closestDistance = Infinity;

    for (const node of Object.keys(distances)) {
      if (!visited.has(node) && distances[node] < closestDistance) {
        closestNode = node;
        closestDistance = distances[node];
      }
    }

    if (closestNode === null || closestNode === end) break;

    visited.add(closestNode);

    for (const [neighbor, weight] of Object.entries(graph[closestNode])) {
      const newDist = distances[closestNode] + weight;
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
      }
    }
  }

  return distances[end] === Infinity ? -1 : distances[end];
}

// // Example:
// const graph: Graph = {
//   A: { B: 1, C: 4 },
//   B: { A: 1, C: 2, D: 5 },
//   C: { A: 4, B: 2, D: 1 },
//   D: { B: 5, C: 1 },
// };
// console.log(dijkstrasAlgorithm(graph, "A", "D")); // Output: 4 (A -> B -> C -> D)
