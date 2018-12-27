- redux 让所有的状态共享，可读， 写要遵守规则，这也是redux的基本规则，只有action可以修改state(执行相应reducer)，组建只能dispatch一个action
- reducer 不可以直接调用的<br>
通过action才可以调用<br>
组件 reducer 不能见面 dispatch<br>
要保护好数据 设置了reducer 提供并且紧缺计算状态的函数，组件只有dispatch 一个action 才能执行reducer