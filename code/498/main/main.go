package main

import()

func findDiagonalOrder(matrix [][]int) []int {
	// 思路：每条对角线上元素 横纵坐标之和相等
	m := len(matrix)
	// 边界值判断
	if m==0{
		return nil
	}
	n := len(matrix[0])
	// 对角线
	diagonalIndexesMaxSum := m + n - 2
	out := make([]int, m*n)
	var outIndex int
	// x,y为横纵坐标
	var x, y int
	// i是每条对角线上的横纵坐标之和
	for i := 0; i <= diagonalIndexesMaxSum; i++ {
		// 向上或向下遍历，完全由i的奇偶性决定
		if i%2 == 0 {
			// 向上遍历
			for {
				out[outIndex] = matrix[y][x]
				outIndex++
				// 本次向上遍历结束判断
				if y == 0 {
					// 结束点在矩阵左上方区域
					if x != n-1 {
						x++
						break
					}
					// 结束点在正中间对角线上
					y++
					break
				} else if x == n-1 {
					// 结束点在矩阵右下方区域
					y++
					break
				}
				// 正常遍历中
				x++
				y--
			}

		} else {
			// 向下遍历
			for {
				out[outIndex] = matrix[y][x]
				outIndex++
				// 本次向下遍历结束判断
				if x == 0 {
					// 结束点在矩阵左上方区域
					if y != m-1 {
						y++
						break
					}
					// 结束点在正中间对角线上
					x++
					break
				} else if y == m-1 {
					// 结束点在矩阵右下方区域
					x++
					break
				}
				// 正常遍历中
				x--
				y++
			}
		}

	}
	return out
}

func main(){}