package main

import()

type MyQueue struct {
	Input *stackArr
	Output *stackArr
}

func Constructor() MyQueue{
	return MyQueue{
			Input : &stackArr{
				Element: make([]int, 0),
				size: 0,
			},
			Output: &stackArr{
				Element: make([]int, 0),
				size: 0,
			},
		}
	
}

func (this *MyQueue) Push(x int){
	this.Input.Push(x)
}

func (this *MyQueue) Pop() int {
	if this.Output.Empty() {
		for !this.Input.Empty() {
			this.Output.Push(this.Input.Pop())
		}
	}
	return this.Output.Pop()
}

func (this *MyQueue) Peek() int  {
	if this.Output.Empty() {
		for !this.Input.Empty() {
			this.Output.Push(this.Input.Pop())
		}
	}
	return this.Output.Top()
}

func (this *MyQueue) Empty() bool {
	return this.Input.Empty() && this.Output.Empty()
}

type stackArr struct {
	Element []int
	size int
}

func (s *stackArr) Empty() bool {
	return s.size == 0
}

func (s *stackArr) Pop() int {
	var result int
	if !s.Empty() {
		maxKey := s.size - 1
		result = s.Element[maxKey]
		s.Element = s.Element[:maxKey]
		s.size--
	}
	return result
}

func (s *stackArr) Push(x int){
	if s.Element != nil {
		s.Element = append(s.Element, x)
		s.size++
	}
}

func (s *stackArr) Top() int {
	if s.Empty() {
		return 0
	}
	return s.Element[s.size-1]
}

func main(){

}