package main

import()

func findMaxConsecutiveOnes(nums []int) int {
	start := -1
	max := 0
	for key,value := range nums {
		if value ==1 {
			if key -start > max {
				max = key - start
			}
		}else {
			start = key
		}
	}
	return max
}

func main(){}