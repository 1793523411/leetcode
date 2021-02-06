# 对称的二叉树

```
请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3

 

示例 1：

输入：root = [1,2,2,3,4,4,3]
输出：true
示例 2：

输入：root = [1,2,2,null,3,null,3]
输出：false
 

限制：

0 <= 节点个数 <= 1000
```

## 递归

```js
var isSymmetric = function (root) {
  if (!root) return true;
  function isMirror(r1, r2) {
    if (!r1 && !r2) return true;
    if (!r1 || !r2) return false;

    return (
      r1.val === r2.val &&
      isMirror(r1.left, r2.right) &&
      isMirror(r1.right, r2.left)
    );
  }

  return isMirror(root.left, root.right);
};
```

## 使用上一个题的镜像树

```js
var isSymmetric = function (root) {
  return JSON.stringify(root) === JSON.stringify(mirrorTree(root));
};

var mirrorTree = function (root) {
  if (!root) return null;
  [root.left, root.right] = [mirrorTree(root.right), mirrorTree(root.left)];
  return root;
};
```
