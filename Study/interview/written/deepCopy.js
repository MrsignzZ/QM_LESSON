function deepCopy(obj) {
  var result;

  //引用类型分数组和对象分别递归
  if (Object.prototype.toString.call(obj) == '[object Array]') {
    result = []
    for (i = 0; i < obj.length; i++) {
      result[i] = deepCopy(obj[i])
    }
  } else if (Object.prototype.toString.call(obj) == '[object Object]') {
    result = {}
    for (var attr in obj) {
      result[attr] = deepCopy(obj[attr])
    }
  }
  //值类型直接返回
  else {
    return obj
  }
  return result
}