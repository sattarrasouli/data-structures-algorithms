import { insertionSort } from './insertionSort';

describe('Insertion Sort', () => {
  test('should sort an array of positive numbers', () => {
    expect(insertionSort([12, 11, 13, 5, 6])).toEqual([5, 6, 11, 12, 13]);
  });

  test('should handle an already sorted array', () => {
    expect(insertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an array with duplicate values', () => {
    expect(insertionSort([4, 2, 4, 3, 1])).toEqual([1, 2, 3, 4, 4]);
  });

  test('should handle an array with negative values', () => {
    expect(insertionSort([-3, -1, -7, -2])).toEqual([-7, -3, -2, -1]);
  });

  test('should handle an empty array', () => {
    expect(insertionSort([])).toEqual([]);
  });
});
