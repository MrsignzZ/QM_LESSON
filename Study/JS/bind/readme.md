1. this 由函数调用方式来决定<br>
  普通函数 对象的方法 事件处理函数 闭包之中
2. this 作用域手动指定<br>
  call apply 区别是 参数 call ,序列 apply 数组<br>
 call、apply立马执行 bind 可以实现延后执行 返回一个新函数， 并且内部的this指定为第一个参数
  手写一个bind
 Function.prototype.bind =
3. bind 是展示this 闭包 函数式编程 原型链最直接的例子<br>
  this:
    - apply手动指定函数的执行中的this为绑定对象的第一个参数<br>
      bind 是基于apply手动指定this为绑定对象的
    - 闭包区域<br>
      this 由调用方式决定为被绑定的函数就是this<br>
      self = this 在闭合空间一直存在
4. 闭包<br>
  函数嵌套函数 闭包中的变量一直可以被访问
5. 函数式编程<br>
  bind 返回一个新函数，解决了时间函数额this丢失问题 一般的事件listen this 指向了事件对象target 在react 组件式开发或者是面向对象有需求，将时间的处理函数作为组件类的方法，既延时调用，同时又收到那个指定this<br>
  apply + 函数式<br>
  `
  return function() {
    self.apply(context)
  }
  `
6. 原型链<br>
  Function.prototype.bind