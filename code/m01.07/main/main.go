package main

import()

func rotate(matrix [][]int)  {
	if len(matrix) == 0 {
		return
	}
	m,n:=len(matrix),len(matrix[0])

	for i := 0; i<m;i++ {
		for j := 0 ;j < n ; j++ {
			if j>i {//转置
				matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
			}
			if j>= n/2 {//反转
				matrix[i][j], matrix[i][n-1-j] = matrix[i][n-1-j], matrix[i][j]
			}
		}
	}
}

func main(){}