- 性能优化<br>
  script标签具有阻塞性，src下载代码，或行内的js<br>
  并执行，不要放在头部<br>
  页面的显示，painting 绘制 排列 重绘重排 <br>
  生命周期 window.onload document. DOMContentLoaded

  js开始 不要阻止dom的绘制，但是也不要等到window onload<br>
    DOMContentLoaded dom redy  img

- $(callback) <br>
  jquery $第一种使用用途是dom ready 事件 <br>
  >$(function() {
  >
  >  // js here
  >
  >})

  $(selector) 用于选择元素 <br>
  动态页面<br>
  可以不用等数据取出来，先显示页面，再去取数据，快得多