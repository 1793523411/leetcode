package main

import()

type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}


// 迭代：for循环
func searchBST(root *TreeNode, val int) *TreeNode {
	for root != nil && root.Val != val {
		if root.Val > val {
			// 根节点值大于目标值，所以选择左子树
			root = root.Left
		} else {
			// 根节点值小于等于目标值，所以选择又子树
			root = root.Right
		}
	}
	return root
}

// 递归
func searchBST2(root *TreeNode, val int) *TreeNode {
	if root == nil || root.Val == val {
		return root
	}
	if root.Val > val {
		return searchBST(root.Left, val)
	} else {
		return searchBST(root.Right, val)
	}
}

func main(){}