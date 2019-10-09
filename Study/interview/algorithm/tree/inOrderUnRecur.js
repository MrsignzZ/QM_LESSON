// 中序遍历非递归版

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function inOrderUnRecur(head) {
  if (head !== null) {
    let stack = []
    while (stack.length !== 0 || head !== null) {
      if (head !== null) {
        stack.push(head)
        head = head.left
      } else {
        head = stack.pop()
        console.log(head.value, ' ')
        head = head.right
      }
    }
  }
}