function myInstanceof(left, right) {
  let left = left.__proto__
  let right = right.prototype

  while (true) {
    if (left === null || left === undefined) {
      return false
    }
    if (right === left) {
      return true
    }
    left = left.__proto__
  }
}