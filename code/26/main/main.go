package main

import()

//快慢指针
func removeDuplicates(nums []int) int {
	n:=len(nums)
	if n<2 {
		return n
	}
	left,right := 1,1
	for right < n {
		if nums[right]!=nums[right-1]{
			nums[left] = nums[right]
			left++
		}
		right++
	}
	return left
}
func removeDuplicates2(nums []int) int {
	n:=len(nums)
	if n<2 {
		return n
	}
	left,right := 1,1
	for right < n {
		if nums[right]!=nums[right-1]{
            if right-left > 0 {
			nums[left] = nums[right]
            }
			left++
		}
		right++
	}
	return left
}


func main(){}