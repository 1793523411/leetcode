package main

import()

type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}


func isSymmetric(root *TreeNode) bool {
	if root == nil {
		return true
	}
	return dfsIsSymmetric(root.Left, root.Right)
}
func dfsIsSymmetric(a, b *TreeNode) bool {
	if a == nil && b == nil {
		return true
	}
	if (a == nil && b != nil) || (a != nil && b == nil) || (a.Val != b.Val) {
		return false
	}
	return dfsIsSymmetric(a.Left, b.Right) && dfsIsSymmetric(a.Right, b.Left)
}

func main(){}