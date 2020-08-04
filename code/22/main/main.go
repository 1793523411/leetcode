package main

import()

func generateParenthesis(n int) []string {
	Output := new([]string)
	_generate(0,0,n,"",Output)
	return *Output
}

func _generate(left int,right int,max int,s string,Output *[]string)  {
	if left == right && left == max {
		*Output = append(*Output,s)
		return
	}
	if left < max {
		_generate(left+1,right,max,s+"(",Output)
	}
	if right < left {
		_generate(left,right+1,max,s+")",Output)
	}
}

func main(){

}