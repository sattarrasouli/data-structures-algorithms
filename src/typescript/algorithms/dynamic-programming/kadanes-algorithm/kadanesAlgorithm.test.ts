import { kadanesAlgorithm } from './kadanesAlgorithm';

describe("Kadane's Algorithm", () => {
  it('should return the maximum subarray sum for a mixed array', () => {
    expect(kadanesAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  it('should handle an array with all positive numbers', () => {
    expect(kadanesAlgorithm([1, 2, 3, 4, 5])).toBe(15);
  });

  it('should handle an array with all negative numbers', () => {
    expect(kadanesAlgorithm([-3, -5, -1, -7])).toBe(-1);
  });

  it('should handle a single element array', () => {
    expect(kadanesAlgorithm([5])).toBe(5);
  });

  it('should handle an empty array', () => {
    expect(kadanesAlgorithm([])).toBe(0);
  });

  it('should handle an array where the max subarray is at the end', () => {
    expect(kadanesAlgorithm([-1, -2, 3, 4, 5])).toBe(12);
  });

  it('should handle an array where the max subarray is at the start', () => {
    expect(kadanesAlgorithm([5, 4, -10, 1, 2])).toBe(9);
  });
});
