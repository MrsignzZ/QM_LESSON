function Parent(name) {
  this.name = name
}
let p = new Parent('张三')
console.log(Parent.prototype)
console.log(p.__proto__);
console.log(Parent.__proto__);

