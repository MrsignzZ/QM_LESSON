# 通信类
  - 同源策略及限制<br>
    同源策略限制从一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的关键的安全机制。<br>
    1. Cookie、 Localstorage和 Indexdb无法读取
    2. DOM无法获得
    3. AJAX请求不能发送
  - 前后端如何通信
    1. Ajax
    2. WebSocket
    3. CORS
  - 如何创建Ajax
    1. XMLHttpRequest对象的工作流程
    2. 兼容性处理
    3. 事件的触发条件
    4. 事件的触发顺序
  - 跨域通信
    1. JSONP
    2. Hash
    3. postMessage
    4. WebSocket
    5. CORS