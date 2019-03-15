- __Promise__ 是es6新增的语法，简单地说就是用同步的方式完成异步的操作，解决了回调地狱的问题

- 可以把 __Promise__ 看成一个状态机，初始状态是 __pending__ ，可以通过函数 __resolve__ 和 __reject__ ，将状态改变成 __resolved__ 和 __rejected__

- __Promise__ 实例拥有 __then()__ 方法，接收两个参数，一个在 __resolved__ 的时候调用，一个在 __rejected__ 的时候调用