react(UI) + redux(data flow) + immutable(不可变数据)<br>

```reducer
  switch
    case
  default
    return
```

只有一分部更新了，丢掉了之前没更新的大部分<br>

深拷贝 浅拷贝 都为拷贝<br>
规避js 复杂对象类型引用式赋值<br>
引用式赋值会让代码未来变得不可预测 不再单纯 出现二义性<br>
结合react reducer 纯函数 引入Immutable 来确保状态对象赋值后是全新的对象 不会影响原对象<br>

1. 浅拷贝: concat() slice() 是数组里面少数返回新数组的方法 解决不了非[]<br>
最直接<br>
最原始的**for(var key in obj)** 重新赋值 没有解决不了的<br>
2. 嵌套对象时，如果内部没有函数的话
深拷贝: **JSON.parse(JSON.stringify(arr))**<br>
        JSON.stringify()将一个对象变成字符串保存下来<br>
        JSON.parse()将字符串变成一个新的对象<br>
3. 递归思想 讲一个深拷贝变成n个浅拷贝，当元素不为对象时退出 性能开销大

各有优势 看情况使用<br>

```
  if (typeof obj !== 'object') return;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj;
```