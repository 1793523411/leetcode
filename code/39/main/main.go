package main

import(
	"sort"
)

func combinationSum(candidates []int, target int) [][]int {
	sort.Ints(candidates)
	return dfs(candidates, target)
}

func dfs(candidates []int, target int) [][]int {
	ret := [][]int{}
	for i, d := range candidates {
		if target-d < 0 {
			break
		} else if target-d == 0 {
			ret = append(ret, []int{d})
			continue
		}
		for _, v := range dfs(candidates[i:], target-d) {
			ret = append(ret, append([]int{d}, v...))
		}
	}
	return ret
}

func main(){}