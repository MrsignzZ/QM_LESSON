function Person(name) {
  this.names = ['kevin', 'daisy']
}
// this 永远跟函数运行的方式有关
function Child() {
  // 得到Person 的属性
  Person.call(this)
}
// 子类拥有父类上的属性

var child1 = new Child()
child1.names.push('yayu')
console.log(child1.names)
var child2 = new Child()
console.log(Person.prototype);

