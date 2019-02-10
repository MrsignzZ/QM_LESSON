# CSS盒模型
  - 标准盒模型与IE和模型<br>
  两者的主要区别在于计算宽度和高度的方式不一样<br>
  标准盒模型: width = content的宽度
  IE盒模型； width = content的宽度加上border和padding的宽度

  - 如何设置这两种盒模型<br>
    标准盒模型: box-sizing: content-box<br>
    IE盒模型: box-sizing: border-box<br>

  - JS如何设置获取盒模型对应的宽和高<br>
    1. dom.style.width/height<br>
      但是它只能取出内联样式的width/height
    2. dom.currentStyle.width/height<br>
      得到的是渲染之后的width/height，相对准确，但是只支持IE
    3. window.getComputedStyle(dom).width/height<br>
      兼容性更好，支持firefox和chrome
    4. dom.getBoundingClientRect().width/height<br>
      计算元素真实的绝对位置

  - 边距重叠
