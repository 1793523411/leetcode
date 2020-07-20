package main

import(
	_"fmt"
)

func lengthOfLongestSubstring(s string) int {
	start,end := 0,0
	for i:=0;i<len(s);i++ {
		//func Index(s, sep string) int // 子串sep在字符串s中第一次出现的位置，不存在则返回-1
		index := strings.Index(s[start:i],string(s[i]))
		if index == -1{
			if i+1 >end {
				end = i+1
			}
		}else {
			start += index + 1
		}
	}
	return end-start
}

func main(){
	
}

/*
核心：只增大不减小的滑动窗口
定义两个游标start和end，遍历字符串，end游标随着遍历无重复增大
若出现重复字符，则两个游标都增大index+1位（窗口大小不变，start游标滑动到重复位置后一位）
这时候由于窗口大小不变，窗口内可能存在重复，恰好遍历从start游标开始，如果没有重复，需要判断i+1与end的关系，超过的话，即i遍历到窗口之外，end再增大
遍历结束，end-start即为结果。

*/

// 执行用时：0 ms, 在所有 Go 提交中击败了100.00% 的用户
// 内存消耗：2.6 MB, 在所有 Go 提交中击败了87.10% 的用户