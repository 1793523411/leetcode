package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

//先序遍历

func sumNumbers(root *TreeNode) int {
	return helper(root, 0)
}

func helper(root *TreeNode, cur int) int {
	if root == nil {
		return 0
	}
	cur = 10*cur + root.Val
	if root.Left == nil && root.Right == nil {
		return cur
	}
	return helper(root.Left, cur) + helper(root.Right, cur)
}

func main() {

}
