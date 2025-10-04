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
  

console.log(bubbleSort([1,244,3,24,]))