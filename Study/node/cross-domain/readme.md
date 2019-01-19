# 前端跨域问题解决方案

  - cookies
  网站为了识别用户身份进行session跟踪而存储子啊用户本地终端上的数据。<br>
  服务器和客户端都可以访问
  >ctx.cookies.set  document.cookie 形式是;隔开的key=value的形式
  1. path 选项
    指定cookie 有效的路径
  2. http-only
    true js无法获得cookie值 增强了cookie 的安全性
  3. maxAge
    cookie最多使用的时间
  4. expires
    cookie的过期时间
  5. overwrite
    是否允许覆盖

  跨域<br>
  同源: 协议 域名 端口 一致<br>
  同源策略 浏览器会拒绝请求。<br>
  1. A 网银网站 Cookie
  2. QQ 澳门赌场 读Cookie请求A
  3. 同源策略

  book.douban.com movie.douban.com<br>
  前端工程化 前后端分离 vue 8080 react 3000
- jsonp
  1. 不允许跨域的读操作
  2. 跨域资源嵌入 img src script[src]
  3. 优势: 兼容性好 缺点: 只支持GET
- cors
  W3C推荐的一种新的官方方案，服务器端支持XMLHttpRequest的跨域请求。<br>
  优点是 只在后端<br>
  支持简单的  非简单的: POST DELETE<br>
  - 白名单 origin

  react 前后端分离
  1. 本地代理 proxy
  create-react-app 3000 UI 请求转发给8080端口<br>
  proxy http://localhost:3000/api => http://localhost:8080/api<br>
  koa 8080 api<br>
  package.json proxy http://localhost:8080<br>
  webpack-dev-server 加了一个proxy，读取package.json