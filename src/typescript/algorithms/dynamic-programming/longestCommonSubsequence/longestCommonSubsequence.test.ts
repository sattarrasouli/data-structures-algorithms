import { longestCommonSubsequence } from './longestCommonSubsequence';

describe('longestCommonSubsequence', () => {
  test('should return length of longest common subsequence', () => {
    expect(longestCommonSubsequence('abcde', 'ace')).toBe(3); // "ace"
    expect(longestCommonSubsequence('abc', 'abc')).toBe(3); // "abc"
    expect(longestCommonSubsequence('abc', 'def')).toBe(0); // no common subsequence
    expect(longestCommonSubsequence('', 'abc')).toBe(0); // empty string
    expect(longestCommonSubsequence('abc', '')).toBe(0); // empty string
    expect(longestCommonSubsequence('abcbdab', 'bdcaba')).toBe(4); // "bdab" or "bcab"
  });

  test('should handle large inputs', () => {
    const str1 = 'a'.repeat(100);
    const str2 = 'a'.repeat(100);
    expect(longestCommonSubsequence(str1, str2)).toBe(100);
  });
});
