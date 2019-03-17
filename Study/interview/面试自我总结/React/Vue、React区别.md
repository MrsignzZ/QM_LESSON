## Vue、React 区别
  - Vue 可以使用v-model实现双向数据绑定，React是单向数据绑定
  - 数据监听方式不同
    1. Vue底层使用了依赖追踪，页面更新渲染已经做了优化
    2. React 需要使用setState()来改变状态，需要shouldComponentUpdate()去优化渲染
  - 模板渲染方式不同
    1. Vue 是指令模板编译，直接编写render函数就能在浏览器运行
    2. React 使用的是JSX语法，可以完全通过JS来控制页面，更加灵活