// ctx.response.body = 'Hello World'
// ctx.response.type = 'html' // 指定文件的头部信息
// ctx.response.body = fs.createReadStream('./template.html')
// web server 支持路由 路由

// if (ctx.request.path !=="/") { // 跳到 / 其他页面 显示跳回
//   ctx.response.type = 'html'
//   ctx.response.body = '<a href="/">Index Page</a>'
// } else {
//   ctx.response.body = "Hello World"
// }
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const fs = require('fs');
var router = new Router();

// ctx 上下文环境
const about = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
};

const main = ctx => {
  ctx.response.body = 'Hello World';
};

// template.html V  main C
router
  .get('/', ctx => {
    ctx.response.body = 'Hello World';
  })
  .get('/about', ctx => {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">Index Page</a>';
  })

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
