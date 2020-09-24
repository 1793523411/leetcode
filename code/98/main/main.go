package main

import(
	"math"
)

type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}

 func isValidBST(root *TreeNode) bool {
    return validBST(root,math.MinInt64,math.MaxInt64)
}

func validBST(root *TreeNode,min,max int) bool{
    //递归结束条件
    if root==nil{
        return true
    }
    // 判断节点的值是不是在区间呢，不是的话就false结束
    if root.Val<=min || root.Val>=max{
        return false
    }
    //左递归 最大值改为当前节点值
    //右递归 最小值改为当前节点值
    return validBST(root.Left,min,root.Val) && validBST(root.Right,root.Val,max)
}

func main(){}