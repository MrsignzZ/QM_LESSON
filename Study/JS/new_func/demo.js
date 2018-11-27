function Otaku(name, age) {
  this.game = game
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