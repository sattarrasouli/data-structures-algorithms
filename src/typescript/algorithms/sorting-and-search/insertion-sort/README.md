# Insertion Sort Algorithm (TypeScript)

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/Tested%20with-Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Algorithms](https://img.shields.io/badge/Algorithms-%23007ACC.svg?style=for-the-badge&logo=thealgorithms&logoColor=white)
![Code On](https://img.shields.io/badge/Code%20On-💻-lightgrey?style=for-the-badge)
![Learning Project](https://img.shields.io/badge/Purpose-Learning-blueviolet?style=for-the-badge)

## 📌 Description

Insertion Sort is a simple comparison-based sorting algorithm that builds the final sorted array one item at a time. It works similar to how you sort playing cards in your hands — by shifting larger elements to the right and placing the current element (key) in its correct position.

It is efficient for small datasets or nearly sorted arrays but becomes slow for large datasets.

## 🧪 Test

To run the test for this algorithm:

```bash
# Clone the project
git clone https://github.com/sattarrasouli/data-structures-algorithms.git

# Go to directory
cd data-structures-algorithms

# Install dependencies
npm install

# Run the test for this specific algorithm
npx jest insertionSort.test.ts
```

## Time Complexity:

- Best: O(n)
- Average: O(n²)
- Worst: O(n²)
- Space Complexity: O(1)

Insertion Sort is an in-place sorting algorithm — it does not require extra memory.

## Algorithm Overview

Selection Sort works by:

- Starts from the second element, treating the first element as sorted.
- Compares the current element (key) with the sorted part of the array.
- Shifts elements to the right to create space for the key.
- Inserts the key into the correct position.
- Repeats until the array is fully sorted.
