# Kadane's Algorithm (Maximum Subarray Sum)

This project contains a TypeScript implementation of **Kadane's Algorithm**, which finds the **maximum sum of a contiguous subarray** within a one-dimensional array of numbers.

## 📌 Algorithm Explanation

Given an array of integers (which may contain both positive and negative numbers), Kadane's Algorithm efficiently finds the contiguous subarray with the largest sum using a **dynamic programming** approach.

For example, given `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`, the contiguous subarray with the largest sum is `[4, -1, 2, 1]`, which has a sum of **6**.


## 🧪 Test

To run the test for this algorithm:

```bash
# Clone the project
git clone https://github.com/sattarrasouli/data-structures-algorithms.git

# go to directory
cd data-structures-algorithms

# Install dependencies
npm install

# Run the test for this specific algorithm
npx jest kadanesAlgorithm.test.ts

```

## Time Complexity:

O(n) → We iterate through the array once, making a single pass.

## Space Complexity:

O(1) → We only store two variables (`maxSoFar` and `maxEndingHere`) regardless of input size.

### 🔹 Steps in the Algorithm
1. Handle the edge case:
   - If the array is empty, return `0`.
2. Initialize two variables:
   - `maxSoFar = arr[0]` → tracks the overall maximum subarray sum found so far.
   - `maxEndingHere = arr[0]` → tracks the maximum subarray sum ending at the current position.
3. Iterate from index `1` to `n - 1`:
   - At each position, decide whether to:
     - **Extend** the previous subarray: `maxEndingHere + arr[i]`
     - **Start fresh** from the current element: `arr[i]`
   - Pick the larger: `maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i])`
   - Update the global max: `maxSoFar = Math.max(maxSoFar, maxEndingHere)`
4. After the loop, return `maxSoFar`.

---

## 💻 Code

```ts
function kadanesAlgorithm(arr: number[]): number {
  if (arr.length === 0) return 0;

  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Example
console.log(kadanesAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
```
