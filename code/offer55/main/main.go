package main

import(
	"math"
)

type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}

 func isBalanced(root *TreeNode) bool {
    if root == nil {
        return true
    }
    return dfs(root) != -1
}

func dfs(node *TreeNode) int {
    // 为空时返回0
    if node == nil {
        return 0
    }
    l := dfs(node.Left)
    r := dfs(node.Right)
    // 非平衡二叉树判断放在前面，如果等于-1则直接返回
    if l == -1 || r == -1 {
        return -1
    }
    // l - r 小于等于1则为平衡二叉树，然后返回最大深度+1，否则返回-1表示非平衡二叉树
    if math.Abs(float64(l - r)) <= 1 {
        return int(math.Max(float64(l), float64(r)) + 1)
    }else {
        return -1
    }
}

func main(){}