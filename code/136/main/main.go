package main

import()

func singleNumber(nums []int) int {
    eor := 0
    for i := 0;i<len(nums);i++{
        eor ^= nums[i]
    }
    return eor
}

func main(){

}