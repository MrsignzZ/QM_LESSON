// 数组去重
function removeDuplicateItems(arr) {
  const map = new Map();
  return arr.filter(e => {
    return map.has(e) ? false : map.set(e, 'map');
  });
}

console.log(
  removeDuplicateItems([123, [1, 2, 3], [1, '2', 3], [1, 2, 3], 'meili'])
);
