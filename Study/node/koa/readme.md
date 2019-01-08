- 启动web server<br>
  HTTP Server 3000 伺服<br>

  用户request(n) 中间件 response(访问结束)<br>

  图片，都给他们构建url 静态资源服务<br>

  中间件是有顺序的， next() response.body() 退出中间件的循环