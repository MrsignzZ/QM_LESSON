- __Generator__ 也是ES6语法里面用来解决异步编程的一种方式

- 使用 __function * name()__ 来表示这是一个Generator函数

- generator内部可以用 __yield__ 来暂停代码，调用 __next()__ 来恢复执行

- 基本的异步执行流程就是最开始给 __generator__ 函数传参，__yield__ 可以返回第一个代码片段的执行结果，
  接下来的 __yield__ 也可以接受上面的执行结果作为参数，又返回一个执行结果，最后 __generator__ return 一个结果，结束了这个异步函数