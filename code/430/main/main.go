package main

import()

/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Prev *Node
 *     Next *Node
 *     Child *Node
 * }
 */

type Node struct {
	Val int
	Prev *Node
	Next *Node
	Child *Node
}

 func flatten(root *Node) *Node {
    if root == nil || (root.Next == nil && root.Child == nil) {
        return root
    }
    
    if root.Child != nil {
        tmp := root.Next

        child := flatten(root.Child)
        root.Next = child
        child.Prev = root
        root.Child = nil
        
        if tmp != nil {
            for child.Next != nil {
                child = child.Next
            }
            child.Next = tmp
            tmp.Prev = child
        }
    } else {
        root.Next = flatten(root.Next)
    }
    
    return root
}


func main(){}