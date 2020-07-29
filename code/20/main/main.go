package main

import()

func isValid(s string) bool {
	hash := map[byte]byte{')':'(', ']':'[', '}':'{'}
	stack := make([]byte, 0)
	if s == "" {
		return true
	}
	for i:=0 ; i<len(s);i++ {
		if s[i] == '(' || s[i] == '[' || s[i] == '{' {
			stack = append(stack, s[i])
			//使用map右括号找左括号
		}else if len(stack) > 0 && stack[len(stack)-1] == hash[s[i]] {
			stack = stack[:len(stack)-2]
		}else {
			return false
		}
	}
	return len(stack) == 0
}

func main(){

}