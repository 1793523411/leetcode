package main

import()

func removeElement(nums []int, val int) int {
	length := len(nums)
	if length == 0 {
		return 0
	}
	i := 0
	j := 0
	for j<length {
		if nums[j] == val {
			j++
		}else{
			nums[i] = nums[j]
			i++
			j++
		}
	}
	return i
}

func main(){}