function reducer(arr) {
  return arr.reduce((a, b) => {
    return Math.max(a, b)
  })
}

var a = [1, 2, 3, 4]
console.log(reducer(a));


