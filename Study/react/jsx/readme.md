JSX React 模板的一种语法<br>
Component render()<br>
函数式组件 return ()<br>
template 跟vue不一样 在JS里 JSX babel

1. JSX 是一切组件的基础， 函数式组件，以返回JSX为目标
2. JSX真的就是JS,可以执行一切JS
3. React JSX React.createElement()更优雅的表达
可读性
JSX是用来描述UI信息的 React.createElement()更能表达这点

不管是小程序 vue react 都是MVVM
模板 数据绑定的{} {{}}
JSX 不支持wx:for 还好他是纯JS的 可以自己写逻辑 灵活
(
  <ul>
    {
      users.map((user, index) => <li key={index}>{user.name}</li>)
    }
  </ul>
)