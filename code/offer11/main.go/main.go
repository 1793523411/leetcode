package main

import()

//二分，java版的二分似乎更优一些，又在有指针的处理上是跳跃式的，而这里是固定的步长为1
func minArray(numbers []int) int {
    left :=0
    right :=len(numbers)-1
    for left<right{
    	 mid :=left+(right-left)>>1
    	if numbers[mid]>numbers[right]{
    		left = mid+1
		}else if numbers[mid]<=numbers[right] {
			right = right-1
		}
	}
	return numbers[left]
}


func main(){

}