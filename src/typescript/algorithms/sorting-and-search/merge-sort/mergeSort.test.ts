import { mergeSort } from "./mergeSort";

describe("Merge Sort", () => {
  it("should sort unsorted array", () => {
    expect(mergeSort([38, 27, 43, 3, 9, 82, 10]))
      .toEqual([3, 9, 10, 27, 38, 43, 82]);
  });

  it("should handle empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });

  it("should handle single element array", () => {
    expect(mergeSort([5])).toEqual([5]);
  });

  it("should handle already sorted array", () => {
    expect(mergeSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
});
