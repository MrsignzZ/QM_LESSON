var shallowCopy = function (obj) {
  if (typeof obj !== 'object') return
  var newObj = obj instanceof Array ? [] : {}
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }

  return newObj
}

var arr = ['old', 1, true]
var new_arr = shallowCopy(arr)
new_arr[1] = 2
console.log(new_arr, arr);


