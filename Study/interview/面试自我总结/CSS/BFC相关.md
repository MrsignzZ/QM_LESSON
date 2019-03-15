# BFC
- 块级格式化上下文(box formatting context)

- 它决定了元素如何对其内容进行定位,以及与其他元素的关系和相互作用

## 触发条件
- 根元素
- position: absolute/fixed
- display: inline-block/table
- float
- overflow: hidden/auto

## 规则
- 属于同一个 BFC 的两个相邻 Box 垂直排列
- 属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠
- BFC 中子元素的 margin box 的左边， 与包含块 (BFC) border box的左边相接触 (子元素 absolute 除外)
- BFC 的区域不会与 float 的元素区域重叠
- 计算 BFC 的高度时，浮动子元素也参与计算

## 应用
- 阻止margin重叠
- 清除浮动
- 自适应两栏布局
- 可以阻止元素被浮动元素覆盖