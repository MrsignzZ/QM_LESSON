- 小程序<br>
  内嵌在微信超级App，是WebView + 微信一些App插件的混合<br>
  WebView App 内嵌页面技术 让App开发使用上Web技术，比Android/IOS 更快<br>
  缺点是性能慢<br>
  在拍照，tabbar，navigationbar 等一些关键的地方又能调用原生微信里的原生组件，提升性能<br>
  WXML 没有div view<br>
  WXSS 使用弹性布局作为主要的布局方式<br>
  js &nbsp; MVMM

- 架构<br>
  小程序的架构是极其简单的<br>
  app.js 入口文件<br>
  app.json 项目配置文件 pages 找到所有的页面<br>
  1. 注册所有文件
  2. window 设置 App 名字，navigationBar背景色 文字色
  3. tabbar 如果App 需要底栏<br>

  pages 小程序由页面组成<br>
  主要的代码都在这里
  1. wxml 写结构
  2. wxss 样式
  3. js 写逻辑
  4. json 文件 页面级别

- 组件<br>
  小程序提供了很多内置功能组件<br>
  swiper 声明式组件 html 标签 功能贫瘠，<br>
  组件 集合了很多标签及功能<br>
  swiper>swiper-item<br>
  indicator-dots="{{true}}"<br>
  {{js运行区域}} 叫做模板符号

- 数据驱动的界面<br>
  界面，数据 传统做法是分别由前端，后端独立做的。<br>
  大前端让界面活起来，将直接绑定数据。<br>
  {{}}界面模板<br>
  小程序为数据绑定提供了约定<br>
  Page({
    data: {
      数据 -> {{}}
    }
  })

- 指令<br>
  wx:for 循环输出指令 block <br>

- rpx<br>
  小程序为了适配所有手机，宽度就是750rpx,

