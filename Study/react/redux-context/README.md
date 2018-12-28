redux 父子组件 兄弟组件传值很麻烦的问题<br>
context 跨组件传值 新的希望 react-redux基于它实现<br>
打破层次关系 实现共享 <br>
不一定要使用redux， 可以用context<br>

- ## context API redux 依靠它<br>
  ```
  childContextTypes = {
    store: PropTypes.object
  }

  getChildContext () {
    return { store: {} }
  }
  ```
  context 分为四步
  - childContextTypes 顶层组件中规定类型
  - getChildContext 顶层组件中设置数据
  - 后代组件通过contextTypes 规定数据类型
  - 后代组件this.context获取数据

  全局的store太烦了，不是react 数据流的语法的烦 是contextAPI代码的重复 <br>
  dry don't repeat your self 生命周期 _setUp() contextTypes<br>
  context react-redux HOC 