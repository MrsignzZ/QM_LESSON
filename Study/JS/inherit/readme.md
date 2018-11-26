1. js 本身没有类，除了基本数据类型外，只有对象。将对象的prototype链指向要继承的对象
2. prototype 是函数的一个属性
3. 继承三步
  - 父类构造函数执行一下，相当于super()
  - prototype属性指向 父类的实例
  - 将prototype.constructor 指向构造函数

类 Parent 三部分
1. 构造函数 new Fn() 对象{} <= this
2. 构造函数prototype属性 可以添加属性、方法
  对象沿着原型链去查找方法
3. 构造函数和原型链有联系的 **Parent.prototype.constructor**
0
- typeof 其实复杂数据类型只有function和object 是语法原生支持的 其他的都只是变种而已<br>
Function VS Object<br>
一等对象，函数可以被执行的对象<br>
可以当做Object的构造函数<br>

- prototype 属性只属于函数<br>
  __proto__函数或方法都有私有属性

  一个对象Ade __proto__属性指向的那个对象B, B就是A的原型对象(父对象),A能达到B里面所有的属性和方法，也可以拿到B的原型对象C上的属性和方法，以此递归， 所谓原型链