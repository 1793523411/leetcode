# 二叉搜索树的最近公共祖先

```
给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]



 

示例 1:

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6
解释: 节点 2 和节点 8 的最近公共祖先是 6。
示例 2:

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
 

说明:

所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉搜索树中。
```

## 思路

利用二叉搜索树的特点

首先判断 p 和 q 是否相等，若相等，则直接返回 p 或 q 中的任意一个，程序结束

- 若不相等，则判断 p 和 q 在向左还是向右的问题上，是否达成了一致
- 如果 p 和 q 都小于 root, 哥俩一致认为向左 👈，则 root = root.left
- 如果 p 和 q 都大于 root, 哥俩一致认为向右 👉，则 root = root.right
- 如果 p 和 q 哥俩对下一步的路线出现了分歧，说明 p 和 q 在当前的节点上就要分道扬镳了，当前的 root 是哥俩临别前一起走的最后一站
- 返回当前 root

## 迭代解法

```js
var lowestCommonAncestor = function (root, p, q) {
  if (!root) {
    return null;
  }
  if (p.val === q.val) {
    return q;
  }
  while (root) {
    if (root.val < q.val && root.val < p.val) {
      root = root.right;
    }
    if (root.val > q.val && root.val > p.val) {
      root = root.left;
    } else {
      return root;
    }
  }
};
```

## 递归解法

```js
var lowestCommonAncestor = function (root, p, q) {
  if ((root.val - p.val) * (root.val - q.val) <= 0) return root;
  if (p.val < root.val) return lowestCommonAncestor(root.left, p, q);
  return lowestCommonAncestor(root.right, p, q);
};
```
