Ajax Google Suggestion<br>
猜出用户想搜索的内容<br>
用户便边输入 (input) 边做建议(ajax 后端去返回list dom)<br>
react onChange input<br>
以前用户搜 只要向后端请求一次<br>
频繁的被触发 减少一些 不会影响效果<br>
节流 在一段时间内只执行一次 (300ms)<br>
限制事件执行的方式 防抖和节流<br>

使用lodash _.throttle(fb, time)

onmousemove ontouchmove 频繁触发多次
throttle 在一定事件内只执行一次

1. 使用时间戳 + 闭包
2. 使用定时器
区别: 实现的方式， 体验的细节，第一次执行的方式 时间戳由于是先为0 previous now-previous > wait 先执行 setTimeout timeout null 第一次执行是在wait到点时执行 后执行