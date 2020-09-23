package main

import()

type Node struct {
    Val int
    Left *Node
    Right *Node
    Next *Node
}


func connect(root *Node) *Node {
    if root == nil {
        return root
    }
    //关联两个左右节点
    connectTwoNode(root.Left, root.Right)
    return root
}

func connectTwoNode(left, right *Node) {
    if left == nil || right == nil {
        return 
    }
    left.Next = right
    //关联左子节点的左右
    connectTwoNode(left.Left, left.Right)
    //关联右子节点的左右
    connectTwoNode(right.Left, right.Right)
    //关联左子节点的游跟右子节点的座
    connectTwoNode(left.Right, right.Left)
}

func main(){}