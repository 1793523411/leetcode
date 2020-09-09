package main

import()

func containsNearbyDuplicate(nums []int, k int) bool {
	record := make(map[int]bool)
	for i, v := range nums {
		if record[v] {
			return true
		}
		record[v] = true
		// 保持record中最多有k个元素
		if len(record) == k+1 {
			delete(record, nums[i-k])
		}
	}
	return false
}


func main(){}