var foo = (function () {
  var t
  return function foo() {
    if (t) return t
    if (t = new Date()) return t
  }
})()
console.log(foo())

setTimeout(() => {
  console.log(foo())
}, 2000);