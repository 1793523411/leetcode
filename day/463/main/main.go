package main

func islandPerimeter(grid [][]int) int {
	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[0]); j++ {
			if grid[i][j] == 1 {
				return dfs(i, j, grid)
			}
		}
	}
	return 0
}

// 这个奇怪的缩进是编辑器的bug，自动变这样了
func dfs(x, y int, grid [][]int) int {
	if x < 0 || x > len(grid)-1 || y < 0 || y > len(grid[0])-1 {
		return 1
	}
	if grid[x][y] == 0 {
		return 1
	}
	if grid[x][y] == 2 {
		return 0
	}
	grid[x][y] = 2
	return dfs(x+1, y, grid) + dfs(x-1, y, grid) + dfs(x, y+1, grid) + dfs(x, y-1, grid)
}

func islandPerimeter2(grid [][]int) int {
	var land, border int
	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[0]); j++ {
			if grid[i][j] == 1 {
				land++
				if i < len(grid)-1 && grid[i+1][j] == 1 {
					border++
				}
				if j < len(grid[0])-1 && grid[i][j+1] == 1 {
					border++
				}
			}
		}
	}
	return 4*land - 2*border
}

func main() {

}
