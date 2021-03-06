package main

import()

var res []int

type TreeNode struct {
	Val int
	Left *TreeNode
	Right *TreeNode
}

func preorderTraversal2(root *TreeNode) []int {
	res = []int{}
	dfs(root)
	return res
}

func dfs(root *TreeNode) {
	if root != nil {
		res = append(res, root.Val)
		dfs(root.Left)
		dfs(root.Right)
	}
}

func preorderTraversal(root *TreeNode) []int {
	var res []int
	var stack []*TreeNode

	for 0 < len(stack) || root != nil { //root != nil 只为了第一次root判断，必须放最后
		for root != nil {
			res = append(res, root.Val)       //前序输出
			stack = append(stack, root.Right) //右节点 入栈
			root = root.Left                  //移至最左
		}
		index := len(stack) - 1 //栈顶
		root = stack[index]     //出栈
		stack = stack[:index]
	}
	return res
}



func main(){}