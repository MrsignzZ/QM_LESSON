// 作用域链
// scopeGlobal {}
var a = 1
function foo() {
  // scope 有点像prototype
  // scopeFoo { a }
  // scopeFoo.a
  // var a = 2
  console.log(a);
}
foo()