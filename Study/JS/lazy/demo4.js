// 惰性函数
// 有些功能可以推迟到执行了第一次之后
// 浏览器嗅探 兼容性 适配性
// 函数的真正的功能 等到执行了一次再决定
function foo() {
  var t = new Date();
  foo = function() {
    return t;
  };
  return foo()
}

console.log(foo());
setTimeout(() => {
  console.log(foo());
}, 2000);
