# 二叉树的镜像

```
请完成一个函数，输入一个二叉树，该函数输出它的镜像。

例如输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
镜像输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1

 

示例 1：

输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
 

限制：

0 <= 节点个数 <= 1000
```

## 递归

```js
var mirrorTree = function (root) {
    if (!root) return null;
    [root.left, root.right] = [mirrorTree(root.right), mirrorTree(root.left)];
    return root
};
```

或者这样

```js
var mirrorTree = function (root) {
    if (!root) {
        return null;
    }
    // 交换当前节点的左右节点
    const leftCopy = root.left;
    root.left = root.right;
    root.right = leftCopy;

    // 对左右子树做相同操作
    mirrorTree(root.left);
    mirrorTree(root.right);

    return root;
};
```

## BFS

```js
var mirrorTree = function (root) {
    if (!root) return root
    let queue = [root]
    while (queue.length) {
        const stack = []
        for (let node of queue) {
            [node.left, node.right] = [node.right, node.left]
            node.left && stack.push(node.left)
            node.right && stack.push(node.right)
        }
        queue = stack
    }
    return root
};
```

## 字面意义上的互换

```js
var mirrorTree = function (root) {
    var json = JSON.stringify(root)
    json = json.replace(/left/g, 'left1')
    json = json.replace(/right/g, 'left')
    json = json.replace(/left1/g, 'right')
    return JSON.parse(json)
};
```