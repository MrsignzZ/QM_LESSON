# DOM事件类
- DOM事件的级别
  1. DOM0 element.onclick=function(){}
  2. DOM2 element.addEventListener('click', function(){}, false)
  3. DOM3 element.addEventListener('keyup', function(){}, false)
- DOM事件模型(冒泡和捕获)
- DOM事件流 : window => 捕获阶段 => 目标阶段 => 冒泡阶段 => window
- DOM事件捕获的具体流程
  - window => document => html => body => ... => 目标元素
- Event对象的常见应用
  ```
  event.preventDefault() // 阻止默认时间
  event.stopPropagation() // 阻止事件冒泡
  event.stopImmediatePropagation() // 阻止多个监听函数响应(事件响应优先级)
  event.currentTarget // 当前事件发生的DOM元素
  event.target // 真正发生事件的DOM元素
  ```
- 自定义事件
  ```
  var eve = new Event/CustomEvent('custome')
  ev.addEventListener('custome', function() {
    console.log('custome')
  })
  ev.dispatchEvent(eve)
  // CustomEvent: 除了可以指定事件名，还可以跟一个Obj来指定参数
  ```
