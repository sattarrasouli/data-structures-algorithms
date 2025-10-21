# Selection Sort Algorithm (TypeScript)

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/Tested%20with-Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Algorithms](https://img.shields.io/badge/Algorithms-%23007ACC.svg?style=for-the-badge&logo=thealgorithms&logoColor=white)
![Code On](https://img.shields.io/badge/Code%20On-💻-lightgrey?style=for-the-badge)
![Learning Project](https://img.shields.io/badge/Purpose-Learning-blueviolet?style=for-the-badge)

## Description

**Selection Sort** is a simple comparison-based sorting algorithm.  
It repeatedly finds the **minimum element** from the unsorted portion of the array and places it at the beginning.  
Although it's not the most efficient, it’s great for learning the fundamentals of sorting logic.

---

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
npx jest selectionSort.test.ts
```

## Time Complexity:

- Best: O(n²)
- Average: O(n²)
- Worst: O(n²)
- Space Complexity: O(1)

Selection Sort performs consistently at O(n²) time complexity because it always goes through the entire array to find the next smallest element, regardless of its initial order.

## Algorithm Overview

Selection Sort works by:

1. Iterating through the array.
2. Finding the smallest element in the unsorted part.
3. Swapping it with the first unsorted element.
4. Repeating until the array is fully sorted.
