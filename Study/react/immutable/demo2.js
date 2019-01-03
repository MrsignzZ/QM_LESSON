var arr = ['old', 1, true, null, undefined]
var new_arr = arr.slice()
new_arr[0] = 'new'
console.log(new_arr, arr);
// concat slice 是数组里面少数返回新数组的方法
// 未来未为可知 new_arr arr 一方修改， 不要用
// js bad parts
// Immutable 让未来可知
// reducer 纯函数