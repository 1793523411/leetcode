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
 func isPalindrome(head *ListNode) bool {
	l:=[]int{}
	for head!=nil{
		l=append(l,head.Val)
		head=head.Next
	}
	j:=len(l)-1
	for  i:=0;i<len(l)/2;i++{
		  if l[i]!=l[j]{
			  return false
		  }else{
			  j--
		  }
	}
	return true
}


func main(){}