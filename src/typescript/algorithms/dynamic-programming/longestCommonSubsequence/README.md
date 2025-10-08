# Longest Common Subsequence (LCS) Problem

This project contains a TypeScript implementation of the **Longest Common Subsequence** problem using **dynamic programming (bottom-up approach)**.

## 📌 Problem Description

The **Longest Common Subsequence (LCS)** problem is defined as:

> Given two strings `text1` and `text2`, find the **length of their longest subsequence**.  
> A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous.

## Solution Approach

1- Create a 2D array dp of size (m+1) x (n+1) where m = text1.length and n = text2.length.

2- dp[i][j] represents the length of LCS of first i characters of text1 and first j characters of text2.

3- Initialize the first row and first column with 0.

4- Loop through both strings:

> If text1[i-1] === text2[j-1], then dp[i][j] = 1 + dp[i-1][j-1].

> Otherwise, dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]).

5-Return dp[m][n] as the length of LCS.

## Steps in the Algorithm

1- Initialize a 2D DP array of size (m+1) x (n+1) with zeros.

2- Loop through i = 1 to m and j = 1 to n:

> If characters match, increment from diagonal: dp[i][j] = 1 + dp[i-1][j-1].

> Else, take maximum from top or left: dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]).

3- Return dp[m][n], which represents the length of LCS.

## Time and Space Complexity

### Time Complexity: O(m \* n)

> m = text1.length, n = text2.length

> Every cell in the DP array is computed once.

### Space Complexity: O(m \* n)

> 2D array stores results for all subproblems.

> Optimization: Can reduce space to O(n) using a rolling array if needed.

### Test

#### To run the test for this algorithm:

```bash
# Clone the project
git clone https://github.com/sattarrasouli/data-structures-algorithms.git

# Go to directory
cd data-structures-algorithms

# Install dependencies
npm install

# Run the test for this specific algorithm
npx jest longestCommonSubsequence.test.ts

```
