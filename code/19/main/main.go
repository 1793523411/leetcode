package main

import()

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *	    Val int
 *     Next *ListNode
 * }
 */
 type ListNode struct {
	Val int
	Next *ListNode
 }
func removeNthFromEnd(head *ListNode, n int) *ListNode {
	result := &ListNode{}
	result.Next = head
	var pre *ListNode
	//防止只有一个节点
	cur := result
	i := 1
	for head != nil {
		if i>= n {
			pre = cur
			cur = cur.Next
		}
		head = head.Next
		i++
	}
	pre.Next = pre.Next.Next
	return result.Next
}

//若不使用cur可以这样写，这样就只用了一个指针
func removeNthFromEnd2(head *ListNode, n int) *ListNode {
	result := &ListNode{}
	result.Next = head
	var pre *ListNode = result
	// cur := result
	i := 1
	for head != nil {
		if i> n {
			// pre = cur
			pre = pre.Next
		}
		head = head.Next
		i++
	}
	pre.Next = pre.Next.Next
	return result.Next
}

func main(){

}