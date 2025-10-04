# QuickSort Algorithm in TypeScript

This repository contains a **QuickSort** implementation in TypeScript.  
QuickSort is a fast **divide-and-conquer** sorting algorithm with average time complexity **O(n log n)**.

## Time and Space Complexity
Average: O(n log n)  
Worst: O(n²)   
Space Complexity: O(n)    
In-place: This implementation is not in-place, as it creates new arrays.

---

## Algorithm Overview

1. **Choose a pivot** element (commonly the last element).  
2. **Partition** the array into two subarrays:  
   - `left` → elements less than the pivot  
   - `right` → elements greater than or equal to the pivot  
3. **Recursively** sort the left and right subarrays.  
4. Combine results: `[...sortedLeft, pivot, ...sortedRight]`.

---

## TypeScript Implementation

```ts
function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([1, 35, 62, 3, 5, 6])); // [1, 3, 5, 6, 35, 62]
