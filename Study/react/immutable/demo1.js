const Immutable = require('immutable')

let obj1 = Immutable.Map({ a: 1, b: 2, c: 3}) // prevState
let obj2 = obj1 // nextState
obj2 = obj2.set("b", 4)
// 传统的对象操作(引用式赋值)就不行，浅拷贝或者深拷贝来处理
// 不用太大阵仗
console.log(obj1);
console.log(obj2);
console.log(obj2 === obj1);
