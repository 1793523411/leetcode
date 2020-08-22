package main

import(
	
)

/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Next *Node
 *     Random *Node
 * }
 */

type Node struct {
	Val int
	Next *Node
	Random *Node
}

func copyRandomList(head *Node) *Node {
    res:=new(Node)

    p:=res
    cur:=head
    m:=map[*Node]*Node{}
    for cur!=nil{
        p.Next=&Node{Val:cur.Val}
        m[cur]=p.Next
        p=p.Next
        cur=cur.Next
    }

    cur =head
    p = res.Next

    for cur!=nil{
        p.Random=m[cur.Random]
        p=p.Next
        cur=cur.Next
    }
    return res.Next
}


func main(){}