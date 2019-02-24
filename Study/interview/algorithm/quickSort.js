function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  let left = 0
  let right = arr.length -1
  while(left < right) {
    const p = arr[0]
    while (arr[right] >= p && left < right) {
      right--
    }
    while (arr[left] <= p && left < right) {
      left++
    }
    if (left === right) {
      [arr[0], arr[left]] = [arr[left], arr[0]]
    }
    [arr[left], arr[right]] = [arr[right], arr[left]]
  }
  return quickSort(arr.slice(0, left))
  .concat(quickSort(arr.slice(left, right + 1)))
  .concat(quickSort(arr.slice(right + 1)))
}

const arr = [4, 2, 5, 7, 1, 9]
console.log(quickSort(arr));
