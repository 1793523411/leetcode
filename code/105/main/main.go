package main

import()

type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}


func buildTree(preorder []int, inorder []int) *TreeNode {
	index := map[int]int{}
	for i, v := range inorder {
		index[v] = i
	}
	return bt(index, preorder, 0, len(preorder)-1, 0, len(inorder)-1)
}

func bt(index map[int]int, preorder []int, startPre, endPre, startIn, endIn int) *TreeNode {
	if len(preorder) == 0 || endIn-startIn < 0 || endPre-startPre < 0 {
		return nil
	}
	m := index[preorder[startPre]]
	t := &TreeNode{
		Val:   preorder[startPre],
		Left:  bt(index, preorder, startPre+1, startPre+m-startIn, startIn, m-1),
		Right: bt(index, preorder, startPre+1+m-startIn, endPre, m+1, endIn),
	}
	return t
}

func main(){}