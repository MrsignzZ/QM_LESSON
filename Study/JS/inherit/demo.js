function Person() {
  this.name = 'kevin';
}
// 原型链对象  {} prototype:任何函数都可以有的一个函数
Person.prototype.getName = function() {
  console.log(this.name);
};

function Child() {}
// 原型式继承
Child.prototype = new Person();
var child1 = new Child();
child1.getName();
console.log(child1.name);


// 父类 子类 prototype 属性 原型式继承
// Person 函数 this指针 -> new Object  js 本没有类 只有对象
// Person.prototype
