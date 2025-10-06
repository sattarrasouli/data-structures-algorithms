# Binary Search Algorithm in TypeScript

This repository contains a simple implementation of the **Binary Search algorithm** in TypeScript.  
Binary Search is an efficient algorithm for finding an element in a **sorted array**. It works by repeatedly dividing the search interval in half.


## Time and Space Complexity
Time Complexity: O(log n)   
Space Complexity: O(1)  
Requirement: Array must be sorted (ascending)

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
npx jest binarySearch.test.ts

```


## Algorithm Overview

1. Start with two pointers: `left` at the start of the array, `right` at the end.  
2. Calculate the middle index: `mid = Math.floor((left + right) / 2)`.  
3. Compare the middle element with the target:
   - If `arr[mid] === target`, return `mid`.  
   - If `arr[mid] < target`, search in the **right half** (`left = mid + 1`).  
   - If `arr[mid] > target`, search in the **left half** (`right = mid - 1`).  
4. Repeat until the element is found or the interval is empty.  
5. If the element is not found, return `-1`.

---

## TypeScript Implementation

```ts
function binarySearch(arr: number[], target: number): number {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}
