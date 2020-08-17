package main

import()

func searchRange(nums []int, target int) []int {
    left := -1
    right := -1

    if len(nums) == 0 || nums[len(nums) - 1] < target {
        return []int{left,right}
    }
    for i := 0; i < len(nums); i++ {
        if nums[i] == target {
            left = i
        }
    }
    
    for j := len(nums) - 1; j >= 0 ; j-- {
        if nums[j] == target {
            right = j
        }
    }
    return []int{right, left}
}



func main(){}