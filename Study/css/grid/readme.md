layout<br>
  css里布局是不能说的秘密，css里直接表达布局是不完整的<br>
1. 网页跟平面设计媒体一样好看<br>
不好看的时候，有table来做布局，tr + td<br>
天生是用来展示数据的，现在也只用于这一项，<br>
  table 不适合现代富媒体<br>
2. 标签的盒模型 比较慢，容易出问题<br>
    margin 合并问题<br>
    浮动， 定位<br>
    成熟的float 精确的定位，现代的display: flex display: table<br>
    标签能力及表现，加css属性 布局<br>
    布局layout就是行row列column的规划
3. 由2 推出圣杯布局
4. 圣杯式布局 div + css<br>
    兼容性一点问题都没有的三列式布局，主列和两边侧边栏 PC 时代， 标签div<br>
    浮动 block => inline 但是宽度还在
5. 圣杯式布局和双飞翼式布局经典的三栏式布局，效果基本相同，两边两栏宽度固定，中间栏宽度自适应。中间栏放最前面，为的是显示的最优性能，放在前面的html先下载先渲染。兼容性好，PC IE8 => chrome/Edge,<br>
margin赋值 float left 主列100% 侧边栏固定值margin 负值<br>
区别: 圣杯式: position: relative + left/right -200px<br>
      双飞翼: 给卖弄 加子元素， main 都是留出位置 但是双飞翼不需要让离岸边侧边栏在移动位置了