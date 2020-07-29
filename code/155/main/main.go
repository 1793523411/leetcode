package main

import()

type MinStack struct {
	s []Node
}

type Node struct {
	d int
	m int
}

func Constructor() MinStack {
	return MinStack{}
}

//在每次入栈的时候 将入栈数据节点化，就是增加一个当前栈顶最小值
func (this *MinStack) Push(x int) {
	d := Node{d:x,m:x}
	if len(this.s)>0 && this.s[len(this.s) - 1].m < x {
		d.m = this.s[len(this.s) - 1].m
	}
	this.s = append(this.s,d)
}

func (this *MinStack) Pop() {
	this.s = this.s[:len(this.s)-1]
}

func (this *MinStack) Top() int {
	return this.s[len(this.s)-1].d
}

func (this *MinStack) GetMin() int {
	return this.s[len(this.s)-1].m
}

func main(){

}