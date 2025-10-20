import { linearSearch } from './linearSearch';

describe('linear search', () => {
  it('find correct index', () => {
    expect(linearSearch([1, 2, 3, 4, 5, 6, 7], 2)).toBe(1);
  });

  it('should not find the index and return -1', () => {
    expect(linearSearch([1, 2, 4, 5, 6, 7], 9)).toBe(-1);
  });

  it('return -1 on empty array', () => {
    expect(linearSearch([], 1)).toBe(-1);
  });

  it('should return the first occurance', () => {
    expect(linearSearch([1, 2, 3, 3, 3, 2], 3)).toBe(2);
  });
});
