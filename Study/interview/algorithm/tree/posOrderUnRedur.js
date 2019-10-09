// 后序遍历非递归版

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function posOrderUnRecur(head) {
  if (head !== null) {
    let stack = []
    let res = []
    stack.push(head)
    while (stack.length !== 0) {
      head = stack.pop()
      res.push(head)
      if (stack.left !== null) {
        stack.push(head.left)
      }
      if (stack.right !== null) {
        stack.push(head.right)
      }
    }
  }
}