# 重建二叉树

```
输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

 

例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
```

## 递归-分治

假设有二叉树如下：

```
    1
   / \
  2   3
 / \
4   5
```

它的前序遍历的顺序是：1 2 4 5 3。中序遍历的顺序是：4 2 5 1 3

因为前序遍历的第一个元素就是当前二叉树的根节点。那么，这个值就可以将中序遍历分成 2 个部分。在以上面的例子，中序遍历就被分成了 4 2 5 和 3 两个部分。4 2 5 就是左子树，3 就是右子树。

最后，根据左右子树，继续递归即可。

```js
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return null;
  }
  const rootVal = preorder[0];
  const node = new TreeNode(rootVal);

  let i = 0;
  for (; i < inorder.length; i++) {
    if (inorder[i] == rootVal) {
      break;
    }
  }
  node.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
  node.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));
  return node;
};
```

用 slice 制造新的数组需要额外的空间和时间

记录下头尾之后，可以节省空间和时间

```js
var buildTree = function (preorder, inorder, a, b, c, d) {
  if (typeof a !== "number") {
    a = 0;
    b = preorder.length - 1;
    c = 0;
    d = inorder.length - 1;
  }

  if (a > b) return null;
  var node = new TreeNode(preorder[a]);
  var index = inorder.findIndex((n, i) => {
    if (i >= c && i <= d && n === preorder[a]) return true;
    else return false;
  });
  node.left = buildTree(preorder, inorder, a + 1, a + index - c, c, index - 1);
  node.right = buildTree(preorder, inorder, a + index - c + 1, b, index + 1, d);
  return node;
};
```

## 迭代法

```js
var buildTree = function (preorder, inorder) {
  if (!preorder.length) return null;
  // 创建根节点
  let root = new TreeNode(preorder[0]);
  let len = preorder.length;
  let stack = [root]; // 使用数组模拟栈，根节点入栈
  let inorderIndex = 0;
  for (let i = 1; i < len; i++) {
    let preorderVal = preorder[i];
    let node = stack[stack.length - 1];
    if (node.val !== inorder[inorderIndex]) {
      node.left = new TreeNode(preorderVal);
      stack.push(node.left);
    } else {
      while (
        stack.length !== 0 &&
        stack[stack.length - 1].val == inorder[inorderIndex]
      ) {
        node = stack.pop();
        inorderIndex++;
      }
      node.right = new TreeNode(preorderVal);
      stack.push(node.right);
    }
  }
  return root;
};
```
