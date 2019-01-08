- 首先考虑安全<br>
  数据库的连接信息 统一放到.env文件下来保存<br>
  .gitignore 本地有 但不上传github<br>
  env2 npm<br>
- sequelize 命令行<br>
  sequelize-cli 这里将集成mysql 初始化<br>
  node react app 数据库服务(数据存储)<br>
  简化sql 操作<br>
  1. init
  一个应用对应一个数据库 eleme DB_NAME<br>
  使用sequelize工具来形象化mysql 操作<br>
  代码运行环境分为开发环境(develop), 线上环境(production) 测试环境(test)<br>
  线上环境mysql的密码不会给我们<br>
  process.env.NODE_ENV 设置当前环境是何？<br>
  线上机器走 .env.prod<br>
  本地开发走 .env 只需要有基本结构和一些数据就好了。<br>
  env2 帮我们将.env逐行读取为配置