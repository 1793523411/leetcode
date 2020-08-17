package main

import()

type ListNode struct {
	Val int
	Next *ListNode
}

func hasCycle(head *ListNode) bool {  
    if head == nil {
        return false
    }
    fast := head.Next       // 快指针，每次走两步
    for fast != nil && head != nil && fast.Next != nil {
        if fast == head {   // 快慢指针相遇，表示有环
            return true
        }
        fast = fast.Next.Next  
        head = head.Next        // 慢指针，每次走一步
    }
    return false
}

func main(){}