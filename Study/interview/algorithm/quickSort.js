/*
 * @Date: 2019-02-22 20:00:13
 * @LastEditors: MrsignzZ
 * @LastEditTime: 2019-08-14 17:26:54
 */

// 经典快排
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

/*
  随机快排 相比经典快排多了一个步骤，在开始的时候随机选择一个数和基准数交换(这里是第一个数)
*/
function quickSortRandom(arr) {
  let random = Math.floor(Math.random() * arr.length);
  // const t = arr[0]
  // arr[0] = arr[random]
  // arr[random] = t
  [arr[0], arr[random]] = [arr[random], arr[0]];
  console.log(quickSort(arr))
}


const arr = [4, 2, 5, 7, 1, 9]

quickSortRandom(arr)
