package main

import "sort"

func topKFrequent(nums []int, k int) []int {
    m := make(map[int]int)
    s := make([]int,0)
    for _,v := range nums {
        i,ok := m[v]
        if ok {
            m[v] = i+1
        }else{
            m[v] = 1
            s = append(s, v)
        }
    }

    sort.Slice(s, func(i, j int) bool {
		return m[s[i]] > m[s[j]]
	})

    return s[:k]
}

func main(){}