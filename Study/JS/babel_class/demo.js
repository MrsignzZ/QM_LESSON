class Person {
  // es6 constructor
  constructor () {
    this.name = name
  }
  sayHello () {
    return this.name
  }
}
console.log(Object.keys(Person.prototype));
console.log(Object.getOwnPropertyNames(Person.prototype));

// es5 构造函数
// 让我们的"构造函数"不可以被当做一般函数来调用
// function _classClassCheck(instance, Constructor) {
//   if (!(instance instanceof Constructor)) {
//     throw new TypeError('Cannot call a class as a function');
//   }
// }
// function Person(name) {
//   // 将Person 函数作为普通函数来调用
//   _classClassCheck(this, Person);
//   this.name = name;
// }
// console.log(Object.keys(Person.prototype));
// console.log(Object.getOwnPropertyNames(Person.prototype));

// Person('xx')

// Person.prototype = {
//   sayHello: function () {
//     return this.name
//   }
// }
// var lilei = new Person('lilei')
// console.log(lilei);
// var hanmeimei = Person('hanmeimei')
// console.log(hanmeimei);
