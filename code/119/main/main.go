package main

import()

func getRow(rowIndex int) []int {
	// 第0行
	nums := []int{1}
	for i := 1; i <= rowIndex; i++ {
		// 尾部追加1
		nums = append(nums, 1)
		// 倒序计算杨辉三角当前行
		for j:=i-1;j>0;j--{
			nums[j]+=nums[j-1]
		}
	}
	return nums
}

func main(){}