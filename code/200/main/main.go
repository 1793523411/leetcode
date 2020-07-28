package main

import()

func numIslands(grid [][]byte) int {
	count := 0
	for line := range grid {
		for column := range grid[line] {
			if grid[line][column] != '1' {
				continue
			}

			count++
			dfs(grid, line, column)
		}
	}
	return count
}

func dfs(grid [][]byte, i, j int) {
	if i < 0 || i >= len(grid) || j < 0 || j >= len(grid[i]) {
		return
	}

	if grid[i][j] != '1' {
		return
	}

	grid[i][j] = '0'
	dfs(grid, i+1, j)
	dfs(grid, i-1, j)
	dfs(grid, i, j+1)
	dfs(grid, i, j-1)
}

func main(){
	
}
