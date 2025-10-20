export function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// // example
// console.log(linearSearch([2, 3, 1, 5, 6, 9], 9));
