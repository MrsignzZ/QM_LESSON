function throttle(func, wait) {
  var context, args;
  var previous = 0;

  return function () {
    var now = +new Date();
    context = this;
    args = arguments;
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  }
}

const n = (() => {
  let value = 0
  return () => {
    return ++value
  }
})()

console.log(n())
console.log(n())