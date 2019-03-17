# Event Loop
  - JS是一门单线程语言，最早是为了和浏览器交互而诞生的。如果JS是多线程的，dom操作就有可能出现问题

  - JS在执行过程中会产生执行上下文，执行上下文中的内容会被按顺序加入执行栈中，遇到异步代码时，会被挂起到task任务队列中，当执行栈为空时，JS 拿出task队列中代码放到执行栈中执行，所以实际上JS的异步行文还是同步行为

  - 任务源分为两种，一种是宏任务，一种是微任务
    1. 宏任务：
      - script
      - setTimeout
      - setInterval
      - I/O
      - UI rendering
    2. 微任务：
      - process.nextTick
      - promise
      - Object.observe
      - MutationObserve

## Event Loop 顺序
  1. 执行同步代码，这属于宏任务
  2. 执行栈为空，查询是否有微任务
  3. 执行所有微任务
  4. 必要的话渲染UI
  5. 然后开始下一轮Event Loop