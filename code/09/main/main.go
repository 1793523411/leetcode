package main

import(
	"strconv"
	"strings"
)

func isPalindrome(x int) bool {
	if(x<0) {
		return false
	}
	origin := x
	redirect := 0
	for x!=0 {
		redirect = redirect *10 + x %10
		x /= 10
	}
	return origin == redirect
}

// 执行用时：8 ms, 在所有 Go 提交中击败了98.08% 的用户
// 内存消耗：5.2 MB, 在所有 Go 提交中击败了88.00% 的用户

func isPalindrome2(x int) bool {
	//转成字符串
	//分割字符成为切片
	s := strconv.Itoa(x)
	ss := strings.Split(s,"")
	slen := len(ss)

	for i := 0;i<=slen/2-1;i++ {
		if ss[i] != ss[slen-1-i] {
			return false
		}
	}
	return true
}
// 执行用时：36 ms, 在所有 Go 提交中击败了6.08% 的用户
// 内存消耗：6.1 MB, 在所有 Go 提交中击败了8.00% 的用户

func main()  {
	
}