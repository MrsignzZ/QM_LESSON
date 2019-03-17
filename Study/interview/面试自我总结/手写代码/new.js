// - new运算符
// 1. 一个新对象被创建。他继承自foo.prototype
// 2. 构造函数foo被执行。执行的时候，相应的传参会被传入，同时上下文(this)会被指定为这个新实例。new foo 等同于new foo() ，只能用在不传递任何参数的情况
// 3. 如果构造函数返回一个"对象"，那么这个对象会取代整个new出来的结果。如果构造函数没有返回对象，那么new出来的结果为步骤1创建的对象

var new2 = function (func) {
  let o = Object.create(func)
  let k = func.apply(o)
  if (typeof k === 'object') {
    return k
  } else {
    return o
  }
}

// test code
var M = function (name) {
  this.name = name
  this.say = function(){
    console.log('say hi')
  }
}

let m = new2(M)
console.log(m);
m.say()



