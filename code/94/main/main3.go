package main

import()

/*
在 解法一 递归 解法二 迭代（stack) 中，必须借助 stack 来实现 中序遍历，增加空间复杂度 O(n)
Morris 则在现有节点上进行节点关联，从而避免了 stack 空间复杂度 O(n) 的问题

    寻找左子树 最大节点 指向当前节点
    砍掉 当前节点 的 左子树

*/
func inorderTraversal3(root *TreeNode) []int {
	var res []int
	var max *TreeNode

	for root != nil {
		if root.Left == nil {
			res = append(res, root.Val)
			root = root.Right
		} else {
			//寻找左树最大节点
			max = root.Left
			for max.Right != nil {
				max = max.Right
			}

			//最大节点指向root
			max.Right = root

			//root = root.Left :移动root到root.left
			//root.Left = nil  :砍左子树，避免下一次遍历到root时，再进入到左子树
			root, root.Left = root.Left, nil
		}
	}
	return res
}
