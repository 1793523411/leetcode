package other

var result [][]int

//!简单易懂

func permute(nums []int) [][]int {
    result = [][]int{} // 最终结果集
    pathNums := []int{} // 路径
    used := make([]bool, len(nums)) // 标记数字是否被使用过
    backtrack(nums, pathNums, used)
    return result
}

func backtrack(nums, pathNums []int, used []bool) {
    if len(nums) == len(pathNums) { // 排列结束, 此处一定要copy slice之后再放入结果集！！！！！！！！
        tmp := make([]int, len(nums))
        copy(tmp, pathNums)
        result = append(result, tmp)
        return
    }

    for i:=0; i<len(nums); i++ {
        if !used[i] { // 当前未使用
            used[i] = true // 标记已使用
            pathNums = append(pathNums, nums[i]) // 将数字加入路径尾部
            backtrack(nums, pathNums, used) // 继续dfs深搜
            pathNums = pathNums[:len(pathNums)-1] // 将尾部数据弹出，回滚操作
            used[i] = false // 标记未使用
        }
    }
}
