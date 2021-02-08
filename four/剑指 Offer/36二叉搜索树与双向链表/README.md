# 二叉搜索树与双向链表

```
输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。
```

[题目描述地址](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/)

## 递归中序遍历

```js
var treeToDoublyList = function (root) {
  if (!root) {
    return;
  }
  let head = null;
  let pre = head;
  inorder(root);
  // 完成中序遍历后，pre指向了最后一个节点
  // 将其闭合成环状结构
  head.left = pre;
  pre.right = head;
  return head;

  /**
   * @param {Node} node
   */
  function inorder(node) {
    if (!node) return;
    // 遍历左子树
    inorder(node.left, pre);

    // 处理当前节点
    if (!pre) {
      // 遍历到最左边节点，此时节点就是双向链表的head
      head = node;
    } else {
      pre.right = node;
    }
    node.left = pre;
    pre = node;

    // 遍历右子树
    inorder(node.right, pre);
  }
};
```

## 迭代中序遍历



```js
var treeToDoublyList = function (root) {
  if (!root) {
    return;
  }

  const stack = [];
  let node = root;
  let pre = null;
  let head = null;
  while (stack.length || node) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      const top = stack.pop();
      //--------------
      if (!pre) {
        head = top;
      } else {
        pre.right = top;
      }
      top.left = pre;
      pre = top;
      //------------
      node = top.right;
    }
  }

  head.left = pre;
  pre.right = head;
  return head;
};
```


**以下是二叉树的中序遍历代码**

```js
var inorderTraversal = function (root) {
  const res = [];
  const stk = [];
  while (root || stk.length) {
    while (root) {
      stk.push(root);
      root = root.left;
    }
    root = stk.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
};
```

或者

```js
var inorderTraversal = function (root) {
  const res = [];
  const stk = [];
  while (root || stk.length) {
    if (root) {
      stk.push(root);
      root = root.left;
    } else {
      root = stk.pop();
      res.push(root.val);
      root = root.right;
    }
  }
  return res;
};
```