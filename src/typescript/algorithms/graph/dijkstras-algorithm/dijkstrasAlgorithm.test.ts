import { dijkstrasAlgorithm, Graph } from './dijkstrasAlgorithm';

describe("Dijkstra's Algorithm", () => {
  const graph: Graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 },
  };

  it('should find the shortest path in a weighted graph', () => {
    expect(dijkstrasAlgorithm(graph, 'A', 'D')).toBe(4);
  });

  it('should return 0 when start and end are the same', () => {
    expect(dijkstrasAlgorithm(graph, 'A', 'A')).toBe(0);
  });

  it('should find a direct neighbor distance', () => {
    expect(dijkstrasAlgorithm(graph, 'A', 'B')).toBe(1);
  });

  it('should return -1 when there is no path to the target', () => {
    const disconnected: Graph = {
      A: { B: 3 },
      B: { A: 3 },
      C: {},
    };
    expect(dijkstrasAlgorithm(disconnected, 'A', 'C')).toBe(-1);
  });

  it('should handle a single node graph', () => {
    const single: Graph = { A: {} };
    expect(dijkstrasAlgorithm(single, 'A', 'A')).toBe(0);
  });

  it('should find the shortest path in a linear graph', () => {
    const linear: Graph = {
      A: { B: 2 },
      B: { A: 2, C: 3 },
      C: { B: 3, D: 4 },
      D: { C: 4 },
    };
    expect(dijkstrasAlgorithm(linear, 'A', 'D')).toBe(9);
  });

  it('should prefer shorter indirect path over longer direct path', () => {
    const g: Graph = {
      A: { B: 1, C: 10 },
      B: { A: 1, C: 2 },
      C: { A: 10, B: 2 },
    };
    expect(dijkstrasAlgorithm(g, 'A', 'C')).toBe(3);
  });
});
