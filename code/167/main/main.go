package main

import()

func twoSum(numbers []int, target int) []int {
	m := map[int]int{}
	for i,v := range numbers {
		find := target - v
		if _, key := m[find]; key {
			return []int{m[find]+1,i+1}
		}
		m[v] = i
	}
	return []int{}
}

func main(){

}