package main

import()

func reverString(s []byte){
	n:=len(s)
	mid:=n/2
	for i :=0 ;i<mid ;i++ {
		s[i],s[n-i-1] = s[n-i-1],s[i] 
	}
}

//双指针快得多
func reverseString2(s []byte)  {
	left := 0
	right := len(s) - 1
	for left < right {
		s[left], s[right] = s[right], s[left]
		left++
		right--
	}

}

func main(){}