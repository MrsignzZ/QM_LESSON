http://localhost:3000/api web server
http://localhost:8080/data.json
http://localhost:8080/

存在跨域 A => B<br>
A 8080 index.html -> B 3000 /api<br>
同一个domain 但是因为port 不同 也是跨域<br>
JS 同源机制 (前端和后端 信任)如果跨域请求不允许<br>

连端口不一样都会跨域，在一家公司，因为提供的服务或部门或项目不一样，需要使用跨域的能力来连调<br>
waimai.element.com 子域名 外卖部门<br>
jiudian.element.com 酒店 跨部门的技术服务<br>
music.qq.com 第三方API服务<br>
同一个域名(一级， 二级) 提供不同的服务<br>
前端8080（react client 组件) 后端3000(server koa /api)  ngnix<br>
前后端分离并行开发