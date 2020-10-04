package main

import()

type Node struct {
    Val int
    Children []*Node
}


// var res [][]int

// func levelOrder(root *Node) [][]int {
// 	res = [][]int{}
// 	if root == nil {
// 		return res
// 	}

// 	queue := []*Node{root}
// 	var level int
// 	for 0 < len(queue) {
// 		counter := len(queue)
// 		res = append(res,[]int{})
// 		for i := 0; i < counter; i++ {
// 			if queue[i] != nil {
// 				res[level] = append(res[level], queue[i].Val)
// 				for _, n := range queue[i].Children {
// 					queue = append(queue, n)
// 				}
// 			}
// 		}
// 		queue = queue[counter:]
// 		level++
// 	}
// 	return res
// }



var res [][]int
func levelOrder(root *Node) [][]int {
    if root == nil{
        return nil
    }
    res = [][]int{}
    dfs(root, 0)
    return res
}

func dfs(root *Node, level int){
    if root == nil{
        return
    }
    if len(res) == level{
        res = append(res, []int{})
    }
    res[level] = append(res[level], root.Val)
    for _, n := range root.Children{
        dfs(n, level+1)
    }
}


func main(){}