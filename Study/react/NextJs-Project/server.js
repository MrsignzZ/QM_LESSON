const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const session = require('koa-session')
const Redis = require('ioredis')

const RedisSessionStore = require('./server/session-store')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const redis = new Redis()

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  server.keys = ['Github App']
  const SESSION_CONFIG = {
    key: 'jid',
    store: new RedisSessionStore(redis)
  }

  server.use(session(SESSION_CONFIG, server))

  server.use(async (ctx, next) => {
    if (!ctx.session.user) {
      ctx.session.user = {
        name: 'mrsignzz',
        age: 18
      }
    } else {
      console.log('session is: ', ctx.session);

    }

    await next()
  })

  router.get('/a/:id', async (ctx) => {
    const id = ctx.params.id
    await handle(ctx.req, ctx.res, {
      pathname: '/a',
      query: { id }
    })
    ctx.respond = false
  })

  server.use(router.routes())

  server.use(async (ctx, next) => {
    await next()
  })

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.response = false
  })

  server.listen(3000, () => {
    console.log('koa server listening on 3000')
  })
})