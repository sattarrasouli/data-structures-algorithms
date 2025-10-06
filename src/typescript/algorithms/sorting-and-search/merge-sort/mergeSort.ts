export function mergeSort(arr: number[]): number[] {
  if (arr.length < 2) return arr

  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))

  return merge(left, right)
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = []
  let i = 0,
    j = 0

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++])
    } else {
      result.push(right[j++])
    }
  }

  return result.concat(left.slice(i), right.slice(j))
}

// // Example usage
// const arr = [38, 27, 43, 3, 9, 82, 10]
// console.log(mergeSort(arr)) // Output: [3, 9, 10, 27, 38, 43, 82]
