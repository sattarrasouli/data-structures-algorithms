import { coinChange } from './coinChange';

describe('coinChange', () => {
  test('should return minimum coins for given amount', () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3); // 5+5+1
    expect(coinChange([2], 3)).toBe(-1); // impossible
    expect(coinChange([1], 0)).toBe(0); // 0 amount needs 0 coins
    expect(coinChange([1], 1)).toBe(1); // only 1 coin needed
    expect(coinChange([1], 2)).toBe(2); // 1+1
    expect(coinChange([186, 419, 83, 408], 6249)).toBe(20); // larger example
  });

  test('should return -1 for impossible amounts', () => {
    expect(coinChange([2, 4], 7)).toBe(-1); // 7 cannot be made
  });

  test('should handle empty coins array', () => {
    expect(coinChange([], 5)).toBe(-1);
  });
});
