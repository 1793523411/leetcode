package main

import()

func pivotIndex(nums []int) int {
	var sum int;
	for _,v := range nums {
		sum += v
	}
	var curSum int
	for k,v := range nums {
		if curSum*2 + v == sum {
			return k
		}
		curSum += v
	}
	return -1
}

func main(){}