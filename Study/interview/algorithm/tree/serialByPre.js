// 先序序列化

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function serialByPre(head) {
  if (head === null) {
    return '#!'
  }
  let res = head.value + '!'
  res += serialByPre(head.left)
  res += serialByPre(head.right)
  return res
}

// 反序列化

function reconByPreString(preStr) {
  let values = preStr.split('!')
  return reconPreOrder(values)
}

function reconPreOrder(arr) {
  let value = arr.shift()
  if (value === '#') {
    return null;
  }
  let head = new Node(parseInt(value))
  head.left = reconPreOrder(arr)
  head.right = reconPreOrder(arr)
}
