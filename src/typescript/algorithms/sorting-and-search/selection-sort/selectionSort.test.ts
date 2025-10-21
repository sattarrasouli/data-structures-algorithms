import { selectionSort } from './selectionSort';

describe('Selection Sort Algorithm', () => {
  it('should sort an array of numbers in ascending order', () => {
    const arr = [64, 25, 12, 22, 11];
    const result = selectionSort(arr);
    expect(result).toEqual([11, 12, 22, 25, 64]);
  });

  it('should handle an already sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = selectionSort(arr);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an empty array', () => {
    const arr: number[] = [];
    const result = selectionSort(arr);
    expect(result).toEqual([]);
  });

  it('should handle an array with duplicate values', () => {
    const arr = [5, 3, 3, 2, 1];
    const result = selectionSort(arr);
    expect(result).toEqual([1, 2, 3, 3, 5]);
  });
});
