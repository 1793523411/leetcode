package main

import()

/*
在 解法三 Morris 破坏树结构 中

    我们为了避免下一次遍历到root时，再进入到左子树，直接砍左子树

为了解决砍树问题，我们可以在 解法三 Morris 破坏树结构 的基础上，增加

    在下次遍历到 root 时，直接把 root加入结果
    移动到root.Right 就可以避免再进入到左子树的死循环

*/

func inorderTraversal4(root *TreeNode) []int {
	var res []int
	var max *TreeNode

	for root != nil {
		if root.Left == nil {
			res = append(res, root.Val)
			root = root.Right
		} else {
			max = root.Left
			for max.Right != nil && max.Right != root {
				max = max.Right
			}

			if max.Right == nil {
				// 未连接,连接到root
				max.Right = root
				root = root.Left
			} else {
				// 已连接,断开连接
				max.Right = nil
				res = append(res, root.Val)
				root = root.Right
			}
		}
	}
	return res
}
