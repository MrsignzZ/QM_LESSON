# 原型链类
  - 创建对象有几种方法
    ```
    1.
    var o1 = { name: 'o1}
    var o11 = new Object({ name: 'o11'})
    2.
    var M = function(){
      this.name = 'o2
    }
    var o2 = new M()
    3.
    var P = { name: 'o3' }
    var o3 = Object.create(P)

  - 原型、构造函数、实例、原型链
    ```
    M.prototype = obj
    obj.constructor = M
    o3.__proto = obj = M.prototype
    o3 = new M
    ```
  - instanceof<br>
    1. 原理: 判断实例对象的__proto__和构造函数的prototype 是否是同一个引用(因为均指向原型)
    2. A instanceof B return true时 A不一定是B的实力对象 用A.__proto__.construtor === B 最为严谨

  - new运算符
    1. 一个新对象被创建。他继承自foo.prototype
    2. 构造函数foo被执行。执行的时候，相应的传参会被传入，同时上下文(this)会被指定为这个新实例。new foo 等同于new foo()，只能用在不传递任何参数的情况
    3. 如果构造函数返回一个"对象"，那么这个对象会取代整个new出来的结果。如果构造函数没有返回对象，那么ne出来的结果为步骤1创建的对象
