package main

import(
	"sort"
)

//func Slice(slice interface{}, less func(i, j int) bool) 
//slice接口可以按照你所提供的less方法，对数组进行排序，如果提供的第一个参数不是一个数组（切片），函数将会panic
// 只需要将数组作为第一个参数传入，并且在第二个函数参数中定义好排序的规则之后，就可以比较快的实现排序了

func merge(intervals [][]int) [][]int {
	sort.Slice(intervals, func(i,j int) bool{
		//升序
		return intervals[i][0] < intervals[j][0]
	})
	var result [][]int
	for i := 0; i < len(intervals);i++ {
		if len(result) == 0 || intervals[i][0] > result[len(result)-1][1] {
			result = append(result,intervals[i])
		} else if intervals[i][1] > result[len(result)-1][1]{
			result[len(result)-1][1] = intervals[i][1]
		}
	}
	return result
}

func main(){}