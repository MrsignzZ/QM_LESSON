军队危机时接管城市<br>
应用只是页面？当然要路由 路由接管一切<br>
按url分发组件 (Page级别组件)<br>
根路由App<br>
  -> path '/' 页面A级别组件(Page) -> (容器组件Container -> 函数式组件(Present))<br>
  -> path '/about' 页面B级别组件 -> (容器组件Container -> 函数式组件(Present))<br>

- Link
  a 太弱了 所以react-router 给了我们Link组件<br>
  to href params ... 满足单页应用需要的一切<br>
- H5 history api 更新url 页面不用刷新<br>
- ref react 里的id 利用它找到JSX的片段<br>
  React.createRef() 返回一个不重复的id<br>
  this.searchRef.current<br>
- context 最后一个 component lifecycle state,事件 函数组件
  this.context.router.history.push('/search/:')