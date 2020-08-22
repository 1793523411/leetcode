package main

import()

type ListNode struct {
	Val int
	Next *ListNode
}

func rotateRight(head *ListNode, k int) *ListNode {
	if head == nil || k == 0 {
		return head
	}
	n, p := 1, head
	for p.Next != nil {
		p = p.Next
		n++
	}
	p.Next = head//将链表连成环
	k %= n
	for i := 1; i <= n-k; i++ {
		p = p.Next
	}
	head, p.Next = p.Next, nil
	return head
}


func main()  {
	
}