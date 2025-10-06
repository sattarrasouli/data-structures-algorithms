# Bubble Sort Algorithm in TypeScript

This is a simple implementation of the **Bubble Sort** algorithm in TypeScript.  
Bubble Sort is a comparison-based sorting algorithm where each pair of adjacent elements is compared and swapped if they are in the wrong order. This process is repeated until the array is sorted.

---

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
npx jest bubbleSort.test.ts

```

## **Code**

```ts
function bubbleSort(arr: number[]): number[] {
  let n = arr.length;
  let swapped: boolean;
  
  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        swapped = true;
      }
    }
    n--;  // Optimization: reduce the number of elements to check
  } while (swapped);
  
  return arr;
}
