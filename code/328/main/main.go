package main

import()

type ListNode struct {
    Val int
     Next *ListNode
}

//双指针
func oddEvenList(head *ListNode) *ListNode {
	var oddDummy = &ListNode{}
	var evenDummy = &ListNode{}
	var i = 1
	var preOdd = oddDummy
	var preEven = evenDummy
	for head != nil {
		next := head.Next
		if i%2 != 0 {
			preOdd.Next = head
			preOdd = head
		} else {
			preEven.Next = head
			preEven = head
		}
		i++
		head = next
	}
	preEven.Next = nil
	preOdd.Next = evenDummy.Next
	return oddDummy.Next
}

func main(){

}