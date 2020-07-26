package main

import(

)

func RomanToInt(s string) (r int) {
	m := map[byte]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}
	pre := 0
	for i := len(s) - 1; i >= 0; i-- {
		cur := m[s[i]]
		if cur >= pre {
			r += cur
		} else {
			r -= cur
		}
		pre = cur
	}

	return r
}

func main(){

}