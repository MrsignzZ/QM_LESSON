- 数据保存
  1. localStorage 小的，结构简单的数据<br>
  复杂 结合  JSON.stringiify()<br>
  JSON.parse() 2-6M 之间<br>
  中奖次数和奖品， 不用去后端取
  2. cookie<br>
  uid=1000<br>
    cookie 就是一个字符串，key=val;key2=val2 非常重要的东西 并且在每次http请求时都会带上<br>

- indexDB 让前端释放野心的数据库，前端的mongodb
  1. request<br>
      >db = window.indexedDB().open(dbname,dbversion)
  2. 异步的<br>
      >onsuccess 开始数据业务<br>
      >onupgradeneeded 更新数据库<br>
      >db.createObjectStore()<br>
      >objectStore.createIndex('email', 'email', { >unique: true })<br>
  3. 事务 transaction 让数据存储更安全
    add request onsuccess 