package main

import()

type TreeNode struct {
	Val int
	Left *TreeNode
	Right *TreeNode
}

//!BFS
// func minDepth(root *TreeNode) int {
// 	var level int
// 	if root == nil {
// 		return level
// 	}
// 	var queue = []*TreeNode{root}

// 	for len(queue) > 0 {
// 		level++
// 		length := len(queue)
// 		for 0 < length {
// 			length--
// 			if queue[0].Left == nil && queue[0].Right == nil {
// 				return level
// 			}
// 			if queue[0].Left != nil {
// 				queue = append(queue, queue[0].Left)
// 			}
// 			if queue[0].Right != nil {
// 				queue = append(queue, queue[0].Right)
// 			}

// 			queue = queue[1:]
// 		}
// 	}
// 	return level
// }

var min int

func minDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	min = 1<<63 - 1
	dfs(root, 1)
	return min
}

func dfs(node *TreeNode, depth int) {
	if node.Right == nil && node.Left == nil { //虽然这里没有打印根，但我们停在这里（根）判断了一下，勉强当作前序遍历
		if depth < min {
			min = depth
		}
		return
	}

	if node.Left != nil {
		dfs(node.Left, depth+1)
	}

	if node.Right != nil {
		dfs(node.Right, depth+1)
	}
}


func main(){}