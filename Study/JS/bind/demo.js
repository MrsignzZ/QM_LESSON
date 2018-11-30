var foo = {
  value: 1
}
var obj = {
  value: 2
}
function bar(name, age) {
  console.log(this.value)
}
var bindObj = bar.bind(obj)
console.log(typeof bindObj)
bindObj()
var bindFoo = bar.bind(foo)
bindFoo()// 新生的函数可以异步执行