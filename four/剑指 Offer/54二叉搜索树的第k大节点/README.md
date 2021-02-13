# 二叉搜索树的第k大节点

```
给定一棵二叉搜索树，请找出其中第k大的节点。

 

示例 1:

输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 4
示例 2:

输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
输出: 4
 

限制：

1 ≤ k ≤ 二叉搜索树元素个数
```

## 中序遍历+排序

```js
var kthLargest = function(root, k) {
    let setArray = new Set()
    const dfs = function(node) {
        if (node === null) {
            return
        }
        setArray.add(node.val)
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    let array = [...setArray]
    array.sort((a,b) => {
        return b - a
    })
    return array[k - 1]
};
```

## 反中序遍历

```js
var kthLargest = function(root, k) {
    // 反中序遍历，记录数值到数组，获取第k -1 个
    let setArray = []
    const dfs = function(node) {
        if (node === null) {
            return
        }
        dfs(node.right)
        setArray.push(node.val)
        dfs(node.left)
    }
    dfs(root)
    return setArray[k - 1]
};
```

遍历过程中记录数值

```js

var kthLargest = function(root, k) {
    // 反中序遍历，记录数值第k个值返回
    let num = 0
    let result = null
    const dfs = function(node) {
        if (node === null) {
            return
        }
        dfs(node.right)
        num++
        if (num === k) {
            result = node.val
            return
        }
        dfs(node.left)
    }
    dfs(root)
    return result
};
```