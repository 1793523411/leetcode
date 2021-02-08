# 二叉树中和为某一值的路径

```
输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。

 

示例:
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
返回:

[
   [5,4,11,2],
   [5,8,4,5]
]
 

提示：

节点总数 <= 10000
```

## 递归DFS

```js
var pathSum = function (root, sum) {
    var res = [], stack = [];
    function dfs(r, sum) {
        if (r == null) return;
        sum -= r.val;
        stack.push(r.val);
        if (r.left == null && r.right == null && sum == 0) res.push([...stack]);
        dfs(r.left, sum);
        dfs(r.right, sum);
        stack.pop();
    }
    dfs(root, sum);
    return res
};
```

## 迭代解法

```js
var pathSum = function (root, sum) {
    if (!root) {
        return [];
    }

    const statck = [[root, sum, [root.val]]];
    const result = [];

    while (statck.length) {
        const [node, num, path] = statck.pop();

        if (!node.left && !node.right && node.val === num) {
            result.push(path);
        }

        if (node.right) {
            statck.push([
                node.right,
                num - node.val,
                [...path, node.right.val]
            ]);
        }
        if (node.left) {
            statck.push([node.left, num - node.val, [...path, node.left.val]]);
        }
    }

    return result;
};
```
