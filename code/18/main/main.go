package main

import(
	"sort"
)

//在三数之和基础上完成四数之和，嘿嘿嘿
// 执行用时：16 ms, 在所有 Go 提交中击败了43.72% 的用户
// 内存消耗：2.9 MB, 在所有 Go 提交中击败了30.00% 的用户
// golang胜出，用时最短，占内存最少
func threeSum(nums []int, target int) [][]int {
	var buf [][]int
	for i:=0;i<len(nums);i++ {
		if i>0 && nums[i] == nums[i-1] {
			continue
		}
		start, end := i+1, len(nums)-1
		for start < end {
			if start > i+1 && start < len(nums) && nums[start] == nums[start-1] {
				start++
				continue
			}
			if end < len(nums)-1 && end >= start && nums[end] == nums[end+1] {
				end--
				continue
			}
			if nums[i]+nums[start]+nums[end] > target {
				end--
			}else if nums[i]+nums[start]+nums[end] <target {
				start++
			}else {
				buf = append(buf, []int{nums[i],nums[start],nums[end]})
				start++
				end--
			}
		}
	}
	return buf
}

func fourSum(nums []int, target int) [][]int {
	sort.Ints(nums)
	var ret [][]int
	for i := 0; i<len(nums);i++ {
		if i>0&&nums[i] == nums[i-1] {
			continue
		}
		r := threeSum(nums[i+1:],target-nums[i])
		for j:=0;j<len(r);j++ {
			ret = append(ret, append(r[j],nums[i]))
		}
	}
	return ret
}

func main(){

}