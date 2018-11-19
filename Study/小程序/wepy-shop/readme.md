wepy-cli 微信官方MVVM框架，开发中大型小程序项目<br>
wepy init standard wepy-shop<br>
standard 项目模板， wepy-shop 项目<br>
进入项目，安装依赖，npm run dev 跑起来<br>
dev 开发状态的跑起来<br>

**MVVM 思想**
1. 页面级别组件，父组件， 子组件<br>
数据鬼页面级别负责，数据单项绑定{{}}流动，传给子组件<br>
方便管理数据，以及维护数据状态。

2. 父子组件数据传递及事件反馈<br>
props sync
emit