package main

import(
	"sort"
)

func threeSumClosest(nums []int, target int) int {
	res := nums[0] + nums[1] + nums[2]
	sort.Ints(nums)
	for i := 0; i < len(nums)-2; i++ {
		left, right := i+1, len(nums)-1
		for left < right {
			tmp := nums[i] + nums[left] + nums[right]
			if tmp > target {
				right--
			} else if tmp < target {
				left++
			} else {
				return target
			}
			if distance(tmp, target) < distance(res, target) {
				res = tmp
			}
		}
	}
	return res
}

func distance(a, b int) int {
	if a < b {
		return b - a
	}
	return a - b
}

func main(){

}