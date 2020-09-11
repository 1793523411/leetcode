package main

import(
	"sort"
)

func majorityElement(nums []int) int {
    length := len(nums)
    sort.Ints(nums)
    return nums[length/2]
}


func main(){

}