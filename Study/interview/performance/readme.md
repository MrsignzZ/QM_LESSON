# 性能优化
  - 资源压缩合并，减少http请求
  - 使用CDN
  - DNS预解析
    1. `<meta http-equiv="x-dns-prefetch-control" content="on">`
    2. `<link rel="dns-prefetch" href="//www.zhix.net">`
  - 异步加载
    - 异步加载的方式
      1. 动态脚本加载
      2. defer
      3. async
    - 异步加载的区别
      1. defer是在html解析完之后才会执行
      2. async是在加载完之后立即执行，若果是多个，执行顺序和加载顺序无关
  - 浏览器缓存
    - 强缓存 在这时间之前不会和服务器通信，直接在浏览器副本中拿出来给页面用
      1. expires 绝对时间
      2. Cache-Control 相对时间
    - 协商缓存
      1. Last-Modified If-Modified-Since 浏览器在强缓存时间之外携带上次缓存的时间
      2. Etag If-None-Match 浏览器返回Etag
