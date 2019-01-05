- --hot 选项 热更新<br>
  当状态只更新一部分<br>
  -- open 自动打开浏览器

- tsconfig.json typescript<br>
  webpack.config.js 工作流<br>
    entry src/index.ts<br>
    有多个入口 给打包后的文件命名<br>
    ```
    {
      app: '',
      vendorStyle: ''
    }
    ```
    为何要有多个入口？ 打包要有时间 bootstrap样式绝对不会改变，没必要每次都打包<br>
    css lib, react react-router react-dom redux 没必要每次都要打包<br>
    打包出来 index.html 变成两个文件http请求数是增加了，但是加的不多，对于线代浏览器(Chrome)来说 同时并发少数的http对性能没有影响，反而有优势，静态资源是会缓存的，lib css js 不需要下载 而业务组价开发的src component js 会经常修改的 分开打包 只会让用户更新这一小部分js 打开页面会更快
    不会改变的lib 部分会放到cdn去
    webpack-dev-server port<br>
    html-plugin src/index.html template<br>
  babel ts编译

- typescript 在react中做加法 让项目强类型化 减少错误
  1. members: MemberEntity[]<br>
    生命周期请求 api 方法返回值类型<br>
    interface MemberEntity
  2. model 层
  3. api 层

common input button<br>
form => page (redux state) => pageContainer