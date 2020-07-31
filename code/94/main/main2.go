package main

import()

// type TreeNode struct {
// 	Val   int
// 	Left  *TreeNode
// 	Right *TreeNode
// }


func inorderTraversal2(root *TreeNode) []int {
	var res []int
	var stack []*TreeNode

	for 0 < len(stack) || root != nil { //root != nil 只为了第一次root判断，必须放最后
		for root != nil {
			stack = append(stack, root) //!入栈
			root = root.Left            //移至最左
		}
		index := len(stack) - 1             //!栈顶
		res = append(res, stack[index].Val) //中序输出
		root = stack[index].Right           //右节点会进入下次循环，如果 =nil，继续出栈
		stack = stack[:index]               //!出栈
	}
	return res
}




/*
func inorderTraversal2(root *TreeNode) []int {
	return inorderIterate(root)
}

func inorderIterate(root *TreeNode) []int {
	if root == nil {
		return []int{}
	}
	node := root
	stack, rest := Stack([]*TreeNode{root}), []int{}
	for len(stack) > 0 {
		for node.Val {
			stack.push(node)
			node = node.Left
		}
		node = stack.pop()
		rest = rest.append(rest,node.Val)
	}

	return rest
}

type Stack []*TreeNode

func (s *Stack) Push(node *TreeNode) {
	*s = append(*s, node)
}

func (s *Stack) Pop() *TreeNode {
	n := []*TreeNode(*s)[len(*s)-1]
	*s = []*TreeNode(*s)[:len(*s)-1]
	return n
}
*/