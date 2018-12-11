// 1. 全局执行上下文压入执行上下文栈
// 2. 全局执行上下文 初始化
var scope = "global scope"
// 3. 创建函数执行上下文, checkScope入栈
// 4. 函数被运行后, this, 创建变量, 作用域链
function checkScope() {
  var scope = 'local scope'
  // 上下文环境 context
  // 在创建时 形成了上下文环境，在环境中的自由变量可以在调用时找到
  // 5. checkScope 函数执行完毕， checkScope执行上下文从执行上下文栈中弹出
  // 6. 执行f函数， 创建了f函数 执行上下文，f函数执行上下文被压入上下文栈
  // 7. f 执行上下文变量 作用域链this
  // f 创建作用域链时 scope 保持了对checkScope函数的作用域的引用
  return function f() {
    return scope
  }
}
var foo = checkScope() // 生成了函数
console.log(foo()); // 调用了
//AO Active Object
//VO Variable Object
fContext = {
  Scope: [ AO, checkScope.AO, globalContext.VO ]
}

checkScopeContext = {
  Scope: [ AO, globalContext.VO]
}
