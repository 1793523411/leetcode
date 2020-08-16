package main

import()

//!该代码通不过，逻辑正确,但会出现空指针
// 定义一个 链表结构
// type ListNode struct {
// 	Val 	int `json:"val"`
// 	Next 	*ListNode `json:"next"`
// }

// // 为了方便计算,我们可以定义一个header,存header节点
// // 定义一个tail 存 尾节点 (不需要遍历到结尾...)
// // 定义一个长度,记录链表长度 (不需要每次遍历计算)
// type MyLinkedList struct {
// 	Header *ListNode `json:"header"`
// 	Tail *ListNode `json:"tail"`
// 	Lens int `json:"lens"`
// }


// /** Initialize your data structure here. */
// func Constructor() MyLinkedList {
// 	return MyLinkedList{
// 		Header: nil,
// 		Tail:   nil,
// 		Lens:   0,
// 	}
// }


// /** Get the value of the index-th node in the linked list. If the index is invalid, return -1. */
// func (this *MyLinkedList) Get(index int) int {
// 	// 如果获取的位置小于0或者等于链表长度,直接返回-1(注意链表下标从0开始,所以这地方可以等于)
// 	if index < 0 || index >= this.Lens{
// 		return -1
// 	}

// 	// 如果index等于0,直接返回头节点的值
// 	if index == 0 {
// 		return this.Header.Val
// 	}

// 	// 遍历一下,找到index节点的值
// 	node := this.Header
// 	for node.Next != nil {
// 		// 因为0的情况一排除,所以直接先减掉
// 		index--
// 		// node指针往下移动一位
// 		if node.Next != nil {
// 			node = node.Next
// 		}
// 		// 当index递减等于0的时候, 返回其值就可以了
// 		if index == 0 {
// 			return node.Val
// 		}
// 	}
// 	return -1
// }


// /** Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. */
// func (this *MyLinkedList) AddAtHead(val int)  {
// 	// 在头节点加入一个节点,那么这个节点就是以后的头节点了.. 而且这个节点的next指向以前的头节点...
// 	this.Header = &ListNode{
// 		Val:  val,
// 		Next: this.Header,
// 	}

// 	// 如果当前链表为空,那么增加一个节点,这个节点既是头节点又是尾节点
// 	if this.Lens == 0 {
// 		this.Tail = this.Header
// 	}
// 	// 因为增加了节点,所以链表长度+1
// 	this.Lens++
// }


// /** Append a node of value val to the last element of the linked list. */
// func (this *MyLinkedList) AddAtTail(val int)  {
// 	// 如果当前链表为空,那么增加尾部,也就是加个头部..
// 	if this.Lens == 0 {
// 		this.Tail = &ListNode{
// 			Val:  val,
// 			Next: nil,
// 		}
// 		this.Header = this.Tail
// 		this.Lens++
// 		return
// 	}
// 	// 尾节点本来next等于nil,现在加一个,next等于这个节点
// 	this.Tail.Next = &ListNode{
// 		Val:  val,
// 		Next: nil,
// 	}

// 	// 所以以后新的尾节点就是之前的next节点了..
// 	this.Tail = this.Tail.Next

// 	// 新增节点,链表长度+1
// 	this.Lens++
// }


// /** Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. */
// func (this *MyLinkedList) AddAtIndex(index int, val int)  {

// 	//   如果 index小于0，则在头部插入节点。
// 	if index <= 0 {
// 		this.AddAtHead(val)
// 		return
// 	}

// 	//   如果 index 大于链表长度，则不会插入节点。
// 	if index > this.Lens {
// 		return
// 	}

// 	//   如果 index 等于链表的长度，则该节点将附加到链表的末尾。
// 	if index == this.Lens {
// 		this.AddAtTail(val)
// 		return
// 	}
	
	
// 	node := this.Header
// 	for node.Next != nil {
// 		index--
// 		// 当index == 0的时候,说明找到了这个节点,往这节点之前插入节点
// 		if index == 0 {
// 			newNode := &ListNode{
// 				Val:  val,
// 				Next: node.Next,
// 			}
// 			node.Next = newNode
// 			// 记得长度+1
// 			this.Lens++
// 			// 记得要返回..
// 			return
// 		}
		
// 		node = node.Next
// 	}

// }


// /** Delete the index-th node in the linked list, if the index is valid. */
// func (this *MyLinkedList) DeleteAtIndex(index int)  {
// 	// 如果index小于0或者大于等于长度,直接返回
// 	if index <0 || index >= this.Lens {
// 		return
// 	}
	
// 	// 如果等于0,就是删除头节点,记得链表长度-1
// 	if index == 0 {
// 		this.Header = this.Header.Next
// 		this.Lens--
// 	}

// 	node := this.Header
// 	for node.Next != nil {
// 		index--
		
// 		if index == 0 {
// 			// 如果node.Next.Next == nil 说明到最后一个节点了.相当于删除最后一个节点
// 			if node.Next.Next == nil {
// 				node.Next = nil
// 				this.Tail = node
// 				this.Lens--
// 				return
// 			}
// 			// 其他情况就是删除中间一个节点(A->B->C),操作就是  A 直接指向 C 就行 (A->C)
// 			node2 := node.Next.Next
// 			node.Next = node2
// 			this.Lens--
// 			return
// 		}
// 		node = node.Next
// 	}

// }


func main(){}