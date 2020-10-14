package main

import(

)

// 定义全局结果数组
var result [][] string

// 主函数
func solveNQueens(n int) [][]string {
	// 初始化result
	result = [][] string{}
	track := make([][]string, 0)

	// 初始化路径track "."，选择后改为"Q"
	for i := 0; i < n; i++ {
		tmp := make([]string, 0)
		for j := 0; j < n; j++ {
			tmp = append(tmp, ".")
		}
		track = append(track, tmp)
	}
	// 递归选择，从第一行选择到第N行回溯
	helper(track, 0)

	// 返回结果
	return result
}

func helper(track [][]string, row int) {
	// 结束条件，row循环到棋盘底部时结束本次选择
	if len(track) == row {
		tmp := make([]string, 0)
		// 将每行的选择结果改为字符串  [[".",".","Q","."],..] => ["..Q.", ...]
		for _, v := range track {
			str := ""
			for _, e := range v {
				str += e
			}
			tmp = append(tmp, str)
		}
		// 将结果push到选择结果集中
		result = append(result, tmp)
		return
	}
	n := len(track[row])
	// 选择列表为1-N列
	for col := 0; col < n; col++ {
		// 判断此处是否可以选择皇后(同行，同列，对角不能存在多个皇后)
		if !isValid(track, row, col) {
			continue
		}
		// 选择皇后
		track[row][col] = "Q"
		// 进行下一行决策选择
		helper(track, row+1)
		// 撤回选择
		track[row][col] = "."
	}
}

func isValid(track [][]string, row, col int) bool {
	n := len(track)
	// 同一列
	for r := 0; r < n; r++ {
		if track[r][col] == "Q" {
			return false
		}
	}
	// 右上角
	for r, c := row-1, col+1; r >= 0 && c < n; r, c = r-1, c+1 {
		if track[r][c] == "Q" {
			return false
		}
	}
	// 左上角
	for r, c := row-1, col-1; r >= 0 && c >= 0; r, c = r-1, c-1 {
		if track[r][c] == "Q" {
			return false
		}
	}
	return true
}

func main(){}
