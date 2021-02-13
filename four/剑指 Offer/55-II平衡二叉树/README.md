# 平衡二叉树

```
输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。

 

示例 1:

给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
返回 true 。

示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。

 

限制：

0 <= 树的结点个数 <= 10000
```

## DFS

**自顶向下**

```js
var isBalanced = function (root) {
  if (!root) return true;
  let left = dfs(root.left);
  let right = dfs(root.right);
  if (Math.abs(right - left) > 1) return false;
  return isBalanced(root.left) && isBalanced(root.right);
};
/** 获取深度 */
function dfs(root) {
  if (!root) return 0;
  return Math.max(dfs(root.left), dfs(root.right)) + 1;
}
```

**自底向上**

```js
var isBalanced = function (root) {
  if (!root) {
    return true;
  }
  /** 思路
   * 1. 从叶子节点向下，-1表示不平衡,>0表示高度
   * 2. 比较左右节点高度，是否满足avl，不满足-1，否则返回节点的高度
   * 3. 最后看高度是-1还是其它的
   */
  return balancedHelper(root) > -1;
};
function balancedHelper(node) {
  if (!node) {
    //没有了返回0,不表示不稳定
    return 0;
  }
  let leftHeight = balancedHelper(node.left);
  let rightHeight = balancedHelper(node.right);
  //如果有一边是-1，则表明不平衡
  if (leftHeight == -1 || rightHeight == -1) {
    return -1;
  }
  //如果差值大于1,返回-1
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }
  //如果都不是-1，将左、右最大height+当前返回
  return Math.max(leftHeight, rightHeight) + 1;
}
```

## BFS

```js
var isBalanced = function (root) {
  if (!root) return true;
  let queue = [root];
  let nodes = [];
  while (queue.length) {
    let node = queue.shift();
    nodes.unshift(node);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  for (let node of nodes) {
    let left = node.left ? node.left.val : 0;
    let right = node.right ? node.right.val : 0;
    if (Math.abs(left - right) > 1) return false;
    node.val = Math.max(left, right) + 1; // 当前节点值变为最大深度
  }
  return true;
};
```
