function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1 ; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
      }
    }
  }
  return arr
}
const arr = [4, 2, 5, 7, 1, 9]
console.log(bubbleSort(arr));