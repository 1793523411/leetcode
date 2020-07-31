package main

import()

type TreeNode struct {
		Val int
	    Left *TreeNode
	    Right *TreeNode
}

func inorderTraversal(root *TreeNode) []int {
	ret := []int{}
	st(root, &ret)
	return ret
}

func st(root *TreeNode, ret *[]int) {
	if root == nil {
		return
	}
	st(root.Left, ret)
	*ret = append(*ret, root.Val)
	st(root.Right,ret)
}

func main(){

}