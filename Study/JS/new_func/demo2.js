// new ？ 实例化过程是怎么底层的？
// Otaku类 抽象概念 等待被new
function Otaku(name, age) {
  this.name = name
  this.age = age
  this.habit = 'Games'
}
Otaku.prototype.strenth = 60
Otaku.prototype.sayYourName = function () {
  console.log('I am' + this.name)
}
var person = new Otaku('Kevin', '18')
console.log(person.name, person.habit, person.strenth)
person.sayYourName()

// new
// 1. 返回一个实例{} 声明，拥有Otaku 函数中家的那些属性
// 2. 实例可以访问到Otaku.prototype 中的属性

// new ？ js 关键字
function objectFactor() {
  console.log(arguments)
  var obj = new Object(),
  Constructor = [].shift.call(arguments)
  // console.log(arguments)
  obj.__proto__ = Constructor.prototype
  Constructor.apply(obj, arguments)
  // 1 返回一个新的空的对象
  // 2 this要指向新的对象
  // 3 让Construtor执行
  // Object上拥有constructor的所有属性？
  // 函数也是对象
  return obj
}
// 1. 构造函数 2. 其余是构造函数需要的参数
const didi = objectFactor(Otaku,'Kevin', 18)
console.log(didi.name)
didi.sayYourName()