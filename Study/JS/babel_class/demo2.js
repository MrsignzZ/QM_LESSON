'use strict';

// class Person {
//   // es6 constructor
//   constructor () {
//     this.name = name
//   }
// }
// es5 构造函数
function Person(name) {
  this.name = name;
}
Person.prototype = {
  sayHello: function sayHello() {
    return this.name;
  }
};
var lilei = new Person('lilei');
console.log(lilei);
var hanmeimei = Person('hanmeimei');
console.log(hanmeimei);
