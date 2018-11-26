手写Promise A+ 规范<br>
js 回调解决异步 出现了倒金字塔式的回调地狱<br>
Promise A+ 规范<br>
一个类，构造函数 resolve reject<br>
返回的就是一个promise实例 then 方法

1. Promise 将executor 封装在构造函数内部，并提供resolve reject 两个函数executor到时候回调

2. then 是同步的 跟promise构造函数一样 属于语法的一方面 将onResolveFullfilled monRejected 存储起来并与 this 绑定

3. executor 高阶函数 才是真正的主战场，负责this.status this.reason this.value 的处理