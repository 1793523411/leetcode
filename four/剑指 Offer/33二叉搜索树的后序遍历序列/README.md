# 二叉搜索树的后序遍历序列

```
输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。

 

参考以下这颗二叉搜索树：

     5
    / \
   2   6
  / \
 1   3
示例 1：

输入: [1,6,3,2,5]
输出: false
示例 2：

输入: [1,3,2,6,5]
输出: true
 

提示：

数组长度 <= 1000
```

## 递归求解

检查左子树是否都小于根节点，右子树是否都大于根节点。并递归检查每个子树。都符合返回true

```js
var verifyPostorder = function(postorder) {
    if(postorder.length <=2)return true
    //后序遍历结果：左右根
    //左子树比根节点小，右子树比根节点大
    const root = postorder.pop()
    let i =0
    while (postorder[i]< root) {
        i++
    }
    //i及后面的节点都应该大于root
    const rightResult =  postorder.slice(i).every(item=>item>root)
    //对左右子树递归判断。如果所有的都满足就返回true，否则返回false
    return rightResult && verifyPostorder(postorder.slice(0,i)) && verifyPostorder(postorder.slice(i))
};
```

## 递减栈

```js
var verifyPostorder = function(postorder) {
    var root = Number.MAX_VALUE
    var stack = [] 
    for(let i = postorder.length - 1;i >= 0;i--)
    {
        if(postorder[i] > root) return false
        while(stack.length && postorder[i] < stack[stack.length -1])
        {
            root = stack.pop()
        }
        stack.push(postorder[i])
    }
    return true
    
};
```