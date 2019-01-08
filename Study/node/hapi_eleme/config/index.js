const env = process.env
console.log(env)
module.export = {
  hots: env.HOST,
  port: env.PORT
}