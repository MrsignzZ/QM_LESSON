## Symbol
  - symbol 是 ES6新增的一种基本数据类型
  - symbol本身就是一种方法
    > typeof Symbol() // "symbol"
  - symbol 不能用作构造函数，也就是不能使用 new
  - symbol的作用：**作为对象属性的唯一标识符** ，比如对象存在一个description属性，如果再写入一个description的值，容器会进行覆盖，这个时候用symbol就可以吧这两个都保存下来
  - symbol不可枚举，stringify()会忽略 symbol
  - symbol for
    1. 这个东西是可共享，在创建的时候会检查全局是否寻在这个key的symbol.如果存在就直接返回这个symbol,如果不存在就会创建，并且在全局注册。
  - symbol keyfor
    1. 找出symbol对应的key，不存在则返回 undefined