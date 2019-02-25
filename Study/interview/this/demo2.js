// demo02
var a = 20;
function fn() {
  function foo() {
    console.log(this.a);
  }
  foo();
}
fn();