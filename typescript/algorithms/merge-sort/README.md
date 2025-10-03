# Merge Sort Algorithm (TypeScript)

## Description

Merge Sort is a classic divide-and-conquer sorting algorithm with a time complexity of **O(n log n)** in all cases.  

Time Complexity:   
- Best: O(n log n)  
- Average: O(n log n)   
- Worst: O(n log n)  
- Space Complexity: O(n)

The space complexity is O(n) because we are using additional arrays to merge the sorted halves
- **Recursive implementation** of Merge Sort.
- **Merge** helper function that combines two sorted arrays.
- Example usage included to demonstrate the algorithm.

## Algorithm Overview

Merge Sort is a divide-and-conquer algorithm that:

1. Divides the array into two halves.
2. Recursively sorts each half.
3. Merges the sorted halves back together into a single sorted array.
