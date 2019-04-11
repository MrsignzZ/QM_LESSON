// 查找最长字符
function mostString(string) {
  let str = string.split('');
  let map = new Map();
  let max = 1,
    obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!map.has(str[i])) {
      map.set(str[i], 1);
    } else {
      map.set(str[i], map.get(str[i]) + 1);
    }
    if (map.get(str[i]) > max) {
      obj = {};
      max = map.get(str[i]);
      obj[str[i]] = map.get(str[i]);
    }
    if (map.get(str[i]) === max) {
      obj[str[i]] = map.get(str[i]);
    }
  }
  return obj;
}
console.log(mostString('xyzzyxyz'));
