- 讲 __async__ 可以联系 __promise__ 和 __generator__，三者都是处理异步的方案

- __async__ 其实就是 __generator__ 的语法糖，__async__ 代替了 *，__await__ 代替了 __yield__，相比较 __generator__ ，__async__ 内执行的执行器，有更好的语义化，返回对象是一个 __promise__

- __async__ 与 __promise__ 的优缺点

  - promise虽然解决了回调地狱的问题，但是在处理复杂逻辑的时候，代码将充满 __thenable__ 的链式调用，语义化不明显，await就能够让整个代码更加扁平化，看上去更清晰

  - await的缺点是可能会导致性能问题，因为他会阻塞代码，也许之后的异步代码并不依赖于前者，但是它仍然会等待前者执行完成