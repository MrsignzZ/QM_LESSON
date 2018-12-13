* 生成器函数 封装着异步顺序执行的代码<br>
yield 停下来 右边promise 左边为待resolve之后的data<br>
生成器函数调用得到生成器 dataGen = steps()<br>
next 一下 可被迭代<br>
{value: 上一次迭代的data, done: false}<br>
Iterator