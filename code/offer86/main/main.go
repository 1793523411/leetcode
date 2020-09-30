package main

import()

type TreeNode struct {
    Val   int
    Left  *TreeNode
    Right *TreeNode
}


 func lowestCommonAncestor(root *TreeNode, p, q *TreeNode) *TreeNode {
	pVal, qVal, rootVal := p.Val, q.Val, root.Val
	if pVal > rootVal && qVal > rootVal {
		return lowestCommonAncestor(root.Right, p, q)
	} else if pVal < rootVal && qVal < rootVal {
		return lowestCommonAncestor(root.Left, p, q)
	} else {
		return root
	}
}

func main(){}