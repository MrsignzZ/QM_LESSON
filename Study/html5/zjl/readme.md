为了封装性，易用性，以及代码的可读性<br>
将弹幕的业务逻辑(独立)封装成一个类，并将其模块化<br>
直接在浏览器端引入(执行)export default<br>
import模块化关键字，浏览器目前还没有支持<br>
async 最近版本才支持， syntax<br>
如何用面向未来的编码风格，又编译通过<br>
写的代码，compile babel最后执行的代码不一样<br>
webpack
  test .js
    babel-loader es5
webpack-dev-server

webpack-dev-server http server 在这之前他会先compile webpack<br>
entry(入口引入更深层次的文件)<br>
module test loader<br>
output(出口，)<br>

- canvas 业务逻辑模式<br>
  render()负责一直画<br>
  递归调用 requestAnimationFrame(this.render.bind(this))<br>
  画画的细节: renderBarrage()<br>
  clearRect(0, 0, w, h)<br>

- barrage 集合
  哪些是可以画的？ video.currentTime >= time 播放完了之后要回收 item.flag = true<br>
  render()<br>

- 代码的思想
  面向对象 对象的职责和分工<br>
  容器对象，canvas video data render() 负责一直画(递归 + x轴的更新) constructor 生成barrage集合<br>
  业务细节对象 data item属性 render() 画出文字 constructor