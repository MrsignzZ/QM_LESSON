# CSS盒模型
  - 标准盒模型与IE和模型<br>
  两者的主要区别在于计算宽度和高度的方式不一样<br>
  标准盒模型: width = content 的宽度
  IE盒模型； width = content 的宽度加上 border 和 padding 的宽度

  - 如何设置这两种盒模型<br>
    标准盒模型: box-sizing: content-box<br>
    IE盒模型: box-sizing: border-box<br>

  - JS如何设置获取盒模型对应的宽和高<br>
    1. dom.style.width/height<br>
      但是它只能取出内联样式的width/height
    2. dom.currentStyle.width/height<br>
      得到的是渲染之后的width/height，相对准确，但是只支持IE
    3. window.getComputedStyle(dom).width/height<br>
      兼容性更好，支持 firefox 和 chrome
    4. dom.getBoundingClientRect().width/height<br>
      计算元素真实的绝对位置

  - 边距重叠
    - BFC(边距重叠解决方案): 块级格式化上下文
    - BFC原理(渲染规则):
      1. BFC 元素垂直方向的边距会发生重叠
      2. BFC 区域不会与浮动元素的 box 重叠
      3. BFC 在页面上是一个独立的容器，里外元素互不影响
      4. 计算 BFC 高度的时候，浮动元素也会参与计算
    - 创建BFC
      1. float 值不为 none
      2. position 值不为 static 或者 relative
      3. display: inline-box/table 等
      4. overflow: auto/hidden
    - BFC使用场景
      1. 防止垂直 margin 重叠
      2. 自适应两栏布局
      3. 清除浮动 BFC 子元素即使是float也会参与计算
