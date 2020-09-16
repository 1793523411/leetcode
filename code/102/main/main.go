package main

import()



type TreeNode struct {
	Val int
	Left *TreeNode
	Right *TreeNode
}


var res [][]int
func levelOrder(root *TreeNode) [][]int {
	if root == nil{
		return nil
	}
	res = make([][]int, 0)
	dfs(root, 0)
	return res
}

func dfs(root *TreeNode, level int){
	if root == nil{
		return
	}
	if level == len(res){
		res = append(res, []int{})
	}
	res[level] = append(res[level], root.Val)
	dfs(root.Left, level+1)
	dfs(root.Right,level+1)
}

func levelOrder2(root *TreeNode) [][]int {
	res := [][]int{}
    if root == nil{
        return res
    }
	var queue = []*TreeNode{root}
	var level int
	for len(queue) > 0 {
		counter := len(queue)
        res = append(res,[]int{})
		for 0 < counter {
			counter--
			if queue[0].Left != nil {
				queue = append(queue, queue[0].Left)
			}
			if queue[0].Right != nil {
				queue = append(queue, queue[0].Right)
			}
			res[level] = append(res[level], queue[0].Val)
			queue = queue[1:]
		}
		level++
	}
	return res
}


func main(){}