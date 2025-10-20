# Merge Sort Algorithm (TypeScript)

## Description

Linear Search is the most basic search algorithm. It sequentially checks each element of the array until the target value is found or the end of the array is reached.
It’s simple to implement but not efficient for large datasets.

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
npx jest linearSearch.test.ts

```

## Time Complexity:

- Best: O(1) — when the target is at the beginning of the array
- Average: O(n/2) ≈ O(n)
- Worst: O(n) — when the target is not found or at the end of the array
- Space Complexity: O(1)

Linear Search requires constant extra space since it only uses a few variables for indexing and comparison.

## Linear Search works by:

- Iterating through each element of the array.

- Comparing the current element with the target value.

- Returning the index if the target is found.

- Returning -1 if the target does not exist in the array.
