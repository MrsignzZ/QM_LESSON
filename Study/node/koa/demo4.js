const Koa = require('koa');
const fs = require('fs.promised')
const app = new Koa();

const main = async (ctx, next) => {
  ctx.response.type = 'html'
  // 去查数据库、文件处理、IO操作等后端操作
  ctx.response.body = await fs.readFileSync('./template.html', 'utf8')
}

app.listen(8080);
