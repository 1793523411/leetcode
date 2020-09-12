package main

import()

func fourSumCount(A []int, B []int, C []int, D []int) int {
	var res int
	m := make(map[int]int)
	for _, c := range C {
		for _, d := range D {
			m[c+d]++
		}
	}

	for _, a := range A {
		for _, b := range B {
			if val, ok := m[0-a-b]; ok {
				res += val
			}
		}
	}
	return res
}

func main(){}