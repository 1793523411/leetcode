package main

type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}

// !新值和原始二叉搜索树中的任意节点值都不同
func insertIntoBST(root *TreeNode, val int) *TreeNode {
    // 如果根节点为空，表示找到要插入的位置，用要插入的值创建一个节点并返回其地址
    if root == nil {
        return &TreeNode{Val: val}
    }
    // val小于根节点的值，往左子树插入；val大于根节点的值，则往右子树插入。插入的结果
    // 是新子树的根节点，要用其来更新左右子树
    if val < root.Val  {
        root.Left = insertIntoBST(root.Left, val)
    } else if val > root.Val {
        root.Right = insertIntoBST(root.Right, val)
    }
    return root
}

func main(){}