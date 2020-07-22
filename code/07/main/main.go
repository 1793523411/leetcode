package main

import (
	"fmt"
)

func revers(x int) int {
	y := 0
	for x!=0 {
		y = y*10 + x%10
		if (y <= -(1<<31) || y>= (1<<31)-1) {
			return 0
		}
		x /= 10
	}
	return y
}

func  main()  {
	fmt.Println(revers(123))
	fmt.Println(revers(-321))
	fmt.Println(revers(120))
	fmt.Println(revers(1534236469))
}