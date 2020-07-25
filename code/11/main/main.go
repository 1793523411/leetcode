package main

import()

func MaxArea(height []int) int {
	var (
		i,j = 0,len(height) - 1
		max = 0
	)
	for j-i > 0 {
		if height[j]<height[i] {
			area := height[j]*(j-i)
			if max < area {
				max = area
			}
			j--
		}else {
			area := height[i]*(j-i)
			if max < area {
				max = area
			}
			i++
		}
	}
	return max
}


func  main() {
	
}