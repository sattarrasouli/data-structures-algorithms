# Dijkstra's Algorithm (Shortest Path)

This project contains a TypeScript implementation of **Dijkstra's Algorithm**, which finds the **shortest path** between two nodes in a weighted graph with non-negative edge weights.

## Algorithm Explanation

Given a weighted graph represented as an adjacency list and two nodes (start and end), Dijkstra's Algorithm efficiently finds the shortest distance between them using a **greedy** approach.

For example, given the graph `A--1--B--2--C--1--D` with `A--4--C` and `B--5--D`, the shortest path from `A` to `D` is `A -> B -> C -> D` with a total weight of **4**.


## Test

To run the test for this algorithm:

```bash
# Clone the project
git clone https://github.com/sattarrasouli/data-structures-algorithms.git

# go to directory
cd data-structures-algorithms

# Install dependencies
npm install

# Run the test for this specific algorithm
npx jest dijkstrasAlgorithm.test.ts

```

## Time Complexity:

O(V^2) where V is the number of vertices. This implementation uses a simple linear scan to find the minimum distance node. Using a min-heap/priority queue would improve this to O((V + E) log V).

## Space Complexity:

O(V) for the distances object and visited set.

### Steps in the Algorithm
1. Initialize all distances to `Infinity`, except the start node which is `0`.
2. While there are unvisited nodes:
   - Pick the unvisited node with the smallest known distance.
   - If it's the end node or no reachable nodes remain, stop.
   - Mark it as visited.
   - For each unvisited neighbor, calculate the distance through the current node.
   - If this new distance is shorter, update the neighbor's distance.
3. Return the distance to the end node (`-1` if unreachable).

---

## Code

```ts
type Graph = Record<string, Record<string, number>>;

function dijkstrasAlgorithm(graph: Graph, start: string, end: string): number {
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

// Example
const graph: Graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 },
};
console.log(dijkstrasAlgorithm(graph, "A", "D")); // 4 (A -> B -> C -> D)
```
