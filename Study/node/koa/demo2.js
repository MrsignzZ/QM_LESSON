const path = require('path')
const Koa = require('koa')
const app = new Koa()
const staticServer = require('koa-static')

app.use(staticServer(path.join(__dirname)))
app.listen(3000)