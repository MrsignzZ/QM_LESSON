组建的形式 容器型和函数组件之分，未来有高阶组件 构建组件时选择合适的方式<br>
路由页面下的组件树 页面级别 形成单页应用<br>
不同状态下，细分组件行为

1. JSX 内有些逻辑比较复杂 update 时间戳 content body 经过了计算一样 在vue里有计算属性 在react里抽象成组件方法
2. moment().fromNow()
   _.truncate(, 30)
   之前的state里的一个值，计算成想要的形态
3. 编辑表单 toggle
  {this.state.open && <Editor />}