package main

import()

func moveZeroes(nums []int) {
	l := len(nums)
	i := 0
	for{
		if i>=l {
			break
		}
		if nums[i]==0 {
			l = l-1
			nums = append(nums[0:i],nums[i+1:]...)
			nums = append(nums,0)
		}else{
			i = i + 1
		}
	}
	return
}

func main(){

}