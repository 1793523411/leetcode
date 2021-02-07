# 从上到下打印二叉树

```
从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

 

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回：

[3,9,20,15,7]
 

提示：

节点总数 <= 1000
```

## 层序遍历

```js
var levelOrder = function(root) {
    if (!root) {
        return [];
    }

    const data = [];
    const queue = [root];
    while (queue.length) {
        const first = queue.shift();
        data.push(first.val);
        first.left && queue.push(first.left);
        first.right && queue.push(first.right);
    }

    return data;
};
```