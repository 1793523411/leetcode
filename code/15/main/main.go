package main

import(
	"sort"
)

func threeSum(nums []int) [][]int {
	sort.Ints(nums)
	var ans [][]int
	for i := 0; i < len(nums)-2; i++ {
		s := nums[i]
		if s > 0 {
			break
		}
		p1, p2 := i+1, len(nums)-1
		for p1 < p2 {
			sum := s + nums[p1] + nums[p2]
			if sum < 0 {
				p1++
			}else if sum > 0 {
				p2--
			}else  {
				ans = append(ans, []int{s, nums[p1], nums[p2]})
				// 移动到重复元素的最后一个位置上
				for p1 < p2 && nums[p1] == nums[p1+1] {
					p1++
				}
				for p1 < p2 && nums[p2] == nums[p2-1] {
					p2--
				}
				p1++
				p2--
			}
		}
		//这一步判断数组的元素是否大于三等于，和去重，也可判断元素数量放在循环外面，去重放在循环开头用continue
		for i < len(nums)-3 && nums[i] == nums[i+1] {
			i++
		}
	}
	return ans
}

func main()  {
	
}