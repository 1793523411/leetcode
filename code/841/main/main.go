package main

import()

func DFS(rooms [][]int) bool{
	// 存储已访问过的顶点
	list := make([]int, len(rooms))

	var dfs func(room int)
	dfs = func(room int) {
		if list[room] > 0 {
			return
		}

		list[room]++

		for _, v := range rooms[room] {
			dfs(v)
		}
	}
	dfs(0)

	for _, v := range list {
		if v == 0 {
			return false
		}
	}

	return true
}

func BFS(rooms [][]int) bool{
	used:=make([]int,len(rooms))
	used[0]=1
	queue:=[]int{0}
	for len(queue)!=0{
		t:=queue[0]
		keys:=rooms[t]
		for _,v:=range keys{
			if used[v]==0{
				used[v]=1
				queue=append(queue,v)
			}
		}
		queue=queue[1:]
	}
	res:=0
	for _,v:=range used{
		if v==1{
			res++
		}
	}
	return res==len(rooms)
}

func  main()  {
	
}