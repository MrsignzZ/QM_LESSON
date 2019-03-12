// 请给Array本地对象增加一个原型方法，它用于删除数组条目中重复的条目(可能有多个) ，返回值是一个包含被删除的重复条目的新数组。

Array.prototype.distinct = function () {
  var ret = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j < this.length;) {
      if (this[i] === this[j]) {
        ret.push(this.splice(j, 1)[0]);
      } else {
        j++;
      }
    }
  }
  return ret;
}
//for test
alert(['a', 'b', 'c', 'd', 'b', 'a', 'e'].distinct());