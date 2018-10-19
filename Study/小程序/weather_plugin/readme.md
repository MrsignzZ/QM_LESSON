- **Component** 组件 <br>
  来自与Facebook 用搭积木的概念来类比做网站。<br>
  我们的网页不再是由标签这个原子级别的构成， div+css<br>
  由组件构成 swiper scroll-view mapview 一块积木，具有特写的功能或表现<br>
  区块，功能块的

  >calendar 组件 第三方

- 自定义的组件开发 <br>
  components 是MVVM架构的核心 它跟pages是平级的<br>
  component 构成pages .json文件<br>
  ```
  {
    'usingComponents' :{
    'icon': '../../components/icon/index'
    }
  }
  ```

  **icon组件**<br>
  在应用中，会用到一些图标，字体图标<br>

  >edit add map home<br>
  >alley iconfont ttf 文件，样式 <br>

  相对独立的一个组件<br>
  可以在多个页面复用