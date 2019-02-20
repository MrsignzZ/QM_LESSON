const Koa = require('koa')
const app = new Koa()
app.use(async (ctx) => {
  let url = ctx.url
  // 从request中获取GET请求
  let request = ctx.request
  let req_query = request.query
  let req_queryString = request.querystring

  // 从上下文呢中获取GET请求
  let ctx_query = ctx.query
  let ctx_queryString = ctx.querystring

  ctx.body = {
    url,
    req_query,
    req_queryString,
    ctx_query,
    ctx_queryString
  }
})

app.listen(3000, () => {
  console.log('server is starting at port 3000');

})