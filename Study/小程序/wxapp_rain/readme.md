canvas 游戏及特效<br>
小程序里canvas 大小是px scale<br>
绘图API 跟web中有区别

ctx + 绘图API 将绘制的细节封装出去<br>
画布 wx.createCanvasContext() 跟web不一样的地方 它的实现使用了IOS/Android的一套<br>
封装？ 绘图这块，封装到utils里<br>

canvas-id="effect"
ctx,
画布的大小 解构 width scale height
drawEffect(width, height, scale, ...)

utils
  小程序里canvas 特效这是一部分，将它抽象封装，有利于将复杂部分隐去，适合多人合作