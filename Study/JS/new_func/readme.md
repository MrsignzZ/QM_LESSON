new 到底做了什么?<br>
`let p = new Person()`<br>
p 是 Object类型, Person 函数类型 typeof
1. Parent 被执行, 加了new后 Parent函数会在p的作用域下执行，this指向当前的p 构造函数里的属性被当做p的属性被创建
2. p.__proto__ 指向 Person.prototype p继承了Parent.prototype中的属性和方法