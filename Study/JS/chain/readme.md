- **链式调用** chain<br>
非常优雅<br>
很简单 将我们的方法面向对象化(prototype)，每个函数做完功能后 return this(对象)<br>
  >$('div') 返回一个JQuery(Fn)对象<br>
`
JQuery.prototype = {
  method: return this
}
`