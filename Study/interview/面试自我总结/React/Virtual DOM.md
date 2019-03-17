# Virtual DOM

- 操作DOM是很慢的，相比较DOM，操作JS对象会快很多
- 可以通过JS来模拟DOM并且渲染，关键在于如何实现局部更新DOM
## diff算法
- DOM结构相对稳定，很少发生节点的跨层移动
- 相同类的组件会生成相似的树形结构，不同类的组件生成的树形结构也不同
- 同一层的一组节点，它们可以通过唯一的key来标识
基于以上三个前提策略，React 分别对tree diff, component diff, element diff进行算法优化

### tree diff

基于策略一，React的做法是把dom tree分层级，对于两个dom tree只比较同一层次的节点，忽略Dom中节点跨层级移动操作，只对同一个父节点下的所有的子节点进行比较。如果对比发现该父节点不存在则直接删除该节点下所有子节点，不会做进一步比较，这样只需要对dom tree进行一次遍历就完成了两个tree的比较。

### component diff
  1. 同一类型组件遵从tree diff 比较v-dom树
  2. 不通类型组件，先将该组件归类为dirty component，替换下整个组件下的所有子节点
  3. 同一类型组件Virtual Dom没有变化，React 允许开发者使用shouldComponentUpdate（）来判断该组件是否进行diff，运用得当可以节省diff计算时间，提升性能

### element diff

  1. 首先对新集合的节点进行循环遍历，for (name in nextChildren)，通过唯一 key 可以判断新老集合中是否存在相同的节点
  2. if (prevChild === nextChild)，如果存在相同节点，则进行移动操作
  3. 但在移动前需要将当前节点在老集合中的位置与 lastIndex 进行比较
  4. if (child._mountIndex < lastIndex)，则进行节点移动操作，否则不执行该操作。
  5. 这是一种顺序优化手段，lastIndex 一直在更新，表示访问过的节点在老集合中最右的位置（即最大的位置），
  6. 如果新集合中当前访问的节点比 lastIndex 大，说明当前访问节点在老集合中就比上一个节点位置靠后，则该节点不会影响其他节点的位置，因此不用添加 7. 到差异队列中，即不执行移动操作，只有当访问的节点比 lastIndex 小时，才需要进行移动操作。

## 总结
  - React 通过制定大胆的 diff 策略，将 O(n3) 复杂度的问题转换成 O(n) 复杂度的问题；

  - React 通过分层求异的策略，对 tree diff 进行算法优化；

  - React 通过相同类生成相似树形结构，不同类生成不同树形结构的策略，对 component diff 进行算法优化；

  - React 通过设置唯一 key的策略，对 element diff 进行算法优化；

  - 建议，在开发组件时，保持稳定的 DOM 结构会有助于性能的提升；

  - 建议，在开发过程中，尽量减少类似将最后一个节点移动到列表首部的操作，当节点数量过大或更新操作过于频繁时，在一定程度上会影响 React 的渲染性能。
