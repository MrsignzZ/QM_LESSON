// 先序遍历非递归版

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function preOrderUnRecur(head) {
  if (head !== null) {
    let stack = []
    stack.push(head)
    while (stack.length !== 0) {
      head = stack.pop()
      console.log(head.value, '')
      if (head.right !== null) {
        stack.push(head.right)
      }
      if (head.left !== null) {
        stack.push(head.left)
      }
    }
  }
}