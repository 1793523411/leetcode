package main

import(
	"math"
)


type Node struct {
	Val int
	Children []*Node
}



func maxDepth(root *Node) int {
	if root == nil {
		return 0
	}
	var queue = []*Node{root}
	var level int
	for 0 < len(queue) {
		length := len(queue)
		for 0 < length {
			length--
			for _, n := range queue[0].Children {
				queue = append(queue, n)
			}
			queue = queue[1:]
		}
		level++
	}
	return level
}

func maxDepth2(root *Node) int {
	if root == nil {
		return 0
	}
	max := 0
	for _, v := range root.Children {
		depth := maxDepth(v)
		max = int(math.Max(float64(max), float64(depth)))
	}
	return max + 1
}


func main(){}