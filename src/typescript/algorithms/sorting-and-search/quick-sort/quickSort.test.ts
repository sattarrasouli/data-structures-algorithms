import { quickSort } from "./quickSort";

describe("Quick Sort", () => {
  it("should sort unsorted array", () => {
    expect(quickSort([10, 7, 8, 9, 1, 5]))
      .toEqual([1, 5, 7, 8, 9, 10]);
  });

  it("should handle empty array", () => {
    expect(quickSort([])).toEqual([]);
  });

  it("should handle single element array", () => {
    expect(quickSort([42])).toEqual([42]);
  });

  it("should handle array with duplicates", () => {
    expect(quickSort([3, 6, 8, 3, 2, 6]))
      .toEqual([2, 3, 3, 6, 6, 8]);
  });
});
