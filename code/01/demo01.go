package main

import (
	"fmt"
)
func twoSum(nums []int, target int) []int {
	var i int;
	var j int;
	var res []int;
    for i = 0;i<len(nums); i++ {
        for j = i+1; j<len(nums);j++ {
            if nums[i] + nums[j] == target{
				res = append(res,i);
				res = append(res,j);
            }
        }
	}
	return res;
}
func main(){
	nums := []int{2, 7, 11, 15};
	target :=  9;
	var res []int;
	res = twoSum(nums,target);
	fmt.Println(res);
}