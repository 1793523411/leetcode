package main

import (
	"fmt"
)

func convert(s string, numRows int) string  {
	if len(s) <= 2 || numRows == 1 {
		return s
	}
	var res string
	var tmp = make([]string, numRows)
	flag := -1
	curPos := 0
	for _,val := range s {
		tmp[curPos] += string(val)
		if curPos == 0 || curPos == numRows-1 {
			flag = -flag
		}
		curPos += flag
	}	
	for _,val := range tmp {
		res += val
	}
	return res
}

func main(){
	var s string = "LEETCODEISHIRING"
	fmt.Println(convert(s,3))
}