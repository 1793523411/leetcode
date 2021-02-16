# 二叉树的最近公共祖先

```
给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]



 

示例 1:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出: 3
解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
示例 2:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出: 5
解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
 

说明:

所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉树中。
```

## 递归

有这么几种情况：

1. 两个节点分别在左右子树，则共同祖先是当前根节点
2. 根节点是其中一个点，共同祖先也是根节点
3. 两个节点在同一边子树，则需要递归判断此子树，此时 root 变为当前子树的根节点，重复步骤 1

```js
var lowestCommonAncestor = function (root, p, q) {
  if (root == null) {
    return root;
  }
  if (root == p || root == q) {
    return root;
  }
  let r1 = lowestCommonAncestor(root.right, p, q); //求解所有可能的子问题
  let r2 = lowestCommonAncestor(root.left, p, q); //求解所有可能的子问题
  if (r1 && r2) {
    //都不为空 每个都找到了 返回根节点
    return root;
  }
  if (r1) {
    return r1;
  }
  if (r2) {
    return r2;
  }
};
```

## 后序遍历

这是一个自底向上的解法。

如果一个节点等于 p 或 q 则计数为 1，如果当前节点的计数加上左节点和右节点的计数等于 2，说明该节点是 p 和 q 的公共祖先。所以便将改节点赋值给 ret。如果 ret 是第一次赋值（也就是 ret===null 的时候），那么改节点就是最近公共祖先。

```js
var lowestCommonAncestor = function (root, p, q) {
  let ret = null;
  function recur(curNode, p, q) {
    if (curNode === null) return 0;
    let l = recur(curNode.left, p, q);
    let r = recur(curNode.right, p, q);
    let v = curNode === p || curNode === q ? 1 : 0;
    v = v + l + r;
    if (v === 2 && ret === null) {
      ret = curNode;
    }
    return v;
  }
  recur(root, p, q);
  return ret;
};
```
