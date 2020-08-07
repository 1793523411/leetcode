package main

import()

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

type ListNode struct {
     Val int
     Next *ListNode
}

func swapPairs(head *ListNode) *ListNode {
    var prev *ListNode = &ListNode{0, head}
    var hint *ListNode = prev
    for prev.Next != nil && prev.Next.Next != nil {
        prev.Next.Next.Next, prev.Next.Next, prev.Next, prev = prev.Next, prev.Next.Next.Next, prev.Next.Next, prev.Next
    }
    return hint.Next
}

func swapPairs2(head *ListNode) *ListNode {
	if head == nil {
		return nil
	}
	if head.Next == nil {
		return head
	}
	cur,pre := head,head.Next
	cur.Next = swapPairs2(pre.Next)
	pre.Next = cur
	return pre
}

func main(){}