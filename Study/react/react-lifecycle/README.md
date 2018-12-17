生命周期
1. 组件也是有实例化的<br>
  Class mount JSX对象<br>
  constructor 本职state 声明,可以用于数据的贮备或请求 传统的面向对象思想<br>
  可以这样用，但没有必要
2. 围绕mount 挂载 首要任务
    - componentWillMount()

    - 性能优化<br>
    componentDidMount()<br>
    请求数据 组件的基本UI已经渲染(加速) MVVMsetState推迟异步执行的数据
3. update<br>
  componentWillUpdate()<br>
  componentDidUpdate()<br>
4. unmount<br>
  卸载
5. props<br>
  因为MVVM 数据流的流向，由外到内的来自于props的更新， 更加频繁<br>
  React 性能优化的核心 拒绝不必要的更新<br>
  nextProps nextState this.state<br>
  this.props 新旧的比较<br>
  shouldComponentUpdate() {
    if (新旧比较) {
      return false
    }
  }
  componentWillReceiveProps(nextProps) {

  }