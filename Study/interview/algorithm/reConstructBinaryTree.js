// 前序中序 重构二叉树
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin) {
  // write code here
  let result = null;
  if (pre.length > 1) {
    const root = pre[0];
    const vinRootIndex = vin.indexOf(root);
    const vinLeft = vin.slice(0, vinRootIndex);
    const vinRight = vin.slice(vinRootIndex + 1, vin.length);
    pre.shift();
    const preLeft = pre.slice(0, vinLeft.length);
    const preRight = pre.slice(vinLeft.length, pre.length);
    result = {
      val: root,
      left: reConstructBinaryTree(preLeft, vinLeft),
      right: reConstructBinaryTree(preRight, vinRight)
    }

  } else if (pre.length === 1) {
    result = {
      val: pre[0],
      left: null,
      right: null
    }
  }
  return result;
}