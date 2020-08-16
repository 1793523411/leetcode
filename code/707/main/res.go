package main

import()

//?做了所有空指针nil的判断，可以通过
type ListNode struct {
	Val  int
	Next *ListNode
}

type MyLinkedList struct {
	List *ListNode
}

/** Initialize your data structure here. */
func Constructor() MyLinkedList {
	var a MyLinkedList
	return a
}

func (this *MyLinkedList) AddAtHead(val int) {
	p := new(ListNode)
	p.Val = val
	p.Next = this.List
	this.List = p
}

/** Get the value of the index-th node in the linked list. If the index is invalid, return -1. */
func (this *MyLinkedList) Get(index int) int {
	p := this.List
	if p == nil || index < 0 {
		return -1
	}
	num := 0
	for p != nil {
		if num == index {
			return p.Val
		}
		num++
		p = p.Next
	}
	return -1
}

/** Append a node of value val to the last element of the linked list. */
func (this *MyLinkedList) AddAtTail(val int) {
	t := this.List
	for t.Next != nil {
		t = t.Next
	}
	p := MyLinkedList{new(ListNode)}
	p.List.Val = val
	p.List.Next = nil
	t.Next = p.List
}

/** Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. */
func (this *MyLinkedList) AddAtIndex(index int, val int) {
	if index <= 0 {
		this.AddAtHead(val)
		return
	}

	if this.List != nil {
		pre := MyLinkedList{new(ListNode)}.List
		num := 0
		p := this.List

		for p != nil {
			if num == index {
				pre.Next = MyLinkedList{new(ListNode)}.List
				pre.Next.Val = val
				pre.Next.Next = p
				return
			}
			num++
			pre = p
			p = p.Next
		}

		if num == index {
			this.AddAtTail(val)
		}

	}
}

/** Delete the index-th node in the linked list, if the index is valid. */
func (this *MyLinkedList) DeleteAtIndex(index int) {
	if index == 0 {
		this.List = this.List.Next
	} else if index > 0 {
		num := 0
		p := this.List
		pre := MyLinkedList{new(ListNode)}.List
		for p != nil {
			if index == num {
				if p.Next == nil {
					pre.Next = nil
				} else {
					pre.Next = p.Next
					pre.Next.Val = p.Next.Val
				}

			}
			num++
			pre = p
			p = p.Next
		}
	}
}

/**
* Your MyLinkedList object will be instantiated and called as such:
* obj := Constructor();
* param_1 := obj.Get(index);
* obj.AddAtHead(val);
* obj.AddAtTail(val);
* obj.AddAtIndex(index,val);
* obj.DeleteAtIndex(index);
 */
