package main

import()

type Node struct {
    Val int
    Children []*Node
}


var res []int

func preorder(root *Node) []int {
	res = []int{}
	dfs(root)
	return res
}

func dfs(root *Node)  {
	if root != nil {
		res = append(res, root.Val)
        for _,n := range root.Children {
	        dfs(n)      
        }
	}
}

func preorder2(root *Node) []int {
	var r []int
	var stack []*Node
	if root == nil {
		return nil
	}
	stack = append(stack, root)
	for len(stack) > 0 {
		cur := stack[len(stack) - 1]
        stack = stack[:len(stack)- 1]
		r = append(r,cur.Val)
		for i := len(cur.Children) - 1; i>=0; i-- {
			stack = append(stack,cur.Children[i])
		}
		
	}
	return r
}

func main(){

}