package main
import()
// 打开转盘锁

//输入：deadends = ["0201","0101","0102","1212","2002"], target = "0202"
//输出：6
//解释：
//可能的移动序列为 "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"。
//注意 "0000" -> "0001" -> "0002" -> "0102" -> "0202" 这样的序列是不能解锁的，
//因为当拨动到 "0102" 时这个锁就会被锁定。

// 思考
// 初读完题，我很直接地想到这可以转化成一个四维的棋盘，然后每次都能移动一个位置，最终走到target。
// 1. 以循环遍历的角度来想，有以下优化点：
// 			(1)由于可以反向拨动转盘，所以可以先判断target四个转盘的位置，将遍历区间限制在四层5*5*5*5而不是10*10*10*10的循环内
// 			(2)四个转盘是无关的，所以可以将target四个数进行排序呢，需要步数远的放在内层循环
//			(3) (1)(2)保证了在没有陷阱的前提下快速找出最短路径，最多也只需要遍历256次
// 			(4) 加上陷阱数字的考虑，怎么样的陷阱数字才能让能找到target呢？ 答案是不能四个数都把target[i]困住：
//					// 哪些情况会困住呢？
// 					// target[i]=0，陷阱数字只有0才能困住
// 					// target[i]=1，陷阱数字只有0,1才能困住
//			------------xxxxxx-----------------------
// 			发现这样很难得到规律，即便所有数字都有可能重合target[i]或者包住target[i]两边等等，仍是有机会绕过去的
// 		为了节省时间，就不继续费脑筋了，看题解
// 题解基本只有一种方法：广度优先搜索。
// 但显然这道题，更重要的是理解什么情况下能走到目标而不踩陷阱。

// 题解区没有看到用找规律的方法去解的，也很难找出规律，直接将四把锁的状态表示为0000~9999共10000个节点，从0000节点出发嗅探可能的前进路线，
// 广度优先搜索，得到的搜索结束得到的就是最短路径。

// 看到题给代码模板，才知道题目本身就当成字符串来做。。。

// 题解区主要是BFS和优化一些的双向BFS。

// 1. 单向BFS
// 参考题解区custer题解。
// 特点是清晰移动，缺点是使用了 map[string]int来记录步数，int是32bit或64bit，而实际上visited只需要bool型，最极端下还可以用interface{}使得内存占用更少
// 至于记录步数，可以用一个变量来存储。
// 还有，’0‘-’9‘是可以直接用byte存储的，不需要rune
// 43/43 cases passed (144 ms)
//Your runtime beats 40 % of golang submissions
//Your memory usage beats 42.86 % of golang submissions (7.2 MB)
func Sol_1_1(deadends []string, target string) int {
	dead := make(map[string]bool)
	for _, v := range deadends {dead[v] = true}		// 填充dead set
	if dead["0000"] {return -1}						// 直接死锁
	if target == "0000" {return 0}					// 出发即是终点，特殊

	// BFS --------------------------------------------------------------
	queue := make([]string, 0)						// 构造处理字符串队列
	queue = append(queue, "0000")			// 起点
	visited := make(map[string]int)					// 已访问过的集合，并记录到达该状态花的步数
	visited["0000"] = 0

	//depth := 0
	for len(queue) != 0 {
		cur := queue[0]		// 取出当前待处理的锁状态（或者说无向图的节点）
		queue = queue[1:]	// 出队
		curSlice := []rune(cur)		// 转为切片

		// 获取当前状态下一步的所有（8个）可能状态
		var nexts []string	// 从cur状态出发，可以到达的其他状态.当前状态的下一步总共有4*2 = 8种可能
		for i:=0; i<4; i++ {	// 对每一位进行变动。
			origin := curSlice[i]	// 备份下原始的字符
			// 正向转动转盘
			curSlice[i] = (curSlice[i] - '0' + 1) % 10 + '0'		// '0'~'9'的字符减去'0' 变为整型，来和1作加减，外边再 + '0'又转为字符
			nexts = append(nexts, string(curSlice))
			curSlice[i] = origin		// 恢复原始状态
			// 反向转动转盘
			curSlice[i] = (curSlice[i] - '0' + 9) % 10 + '0'		// 如果是-1会出现负数情况，不好处理。循环左移的技巧
			nexts = append(nexts, string(curSlice))
			curSlice[i] = origin
		}

		// 遍历下一步的所有可能状态
		for _, next := range nexts {
			if _, ok := visited[next]; !ok && !dead[next] {		// 没有访问过，也不是dead
				queue = append(queue, next)						// 入队
				visited[next] = visited[cur] + 1				// 对应到达这个next需要多少步
				if next == target {return visited[next]}		// 如果到达目标，就返回最少需要的步数
			}
		}
	}

	return -1
}

// 2. 单向BFS
// 前面已经分析了上面写法的一些小问题，现在做一些改动
// 至于这个步数，还可以放到queue来实现，将状态的string和步数捆在一起作为结构体。弄一个结构体队列
//43/43 cases passed (88 ms)
//Your runtime beats 83.33 % of golang submissions
//Your memory usage beats 42.86 % of golang submissions (7.3 MB)
// 减少内存分配和垃圾回收的操作也是提高性能的一个方向...
func Sol_1_2(deadends []string, target string) int {
	dead := make(map[string]bool)
	for _, v := range deadends {dead[v] = true}		// 填充dead set
	if dead["0000"] {return -1}						// 直接死锁
	if target == "0000" {return 0}					// 出发即是终点，特殊

	// BFS --------------------------------------------------------------
	queue := make([]string, 0)						// 构造处理字符串队列
	queue = append(queue, "0000")			// 起点
	visited := make(map[string]uint16)					// 已访问过的集合。由于总共只有一万个状态点，所以步数不可能需要更多，所以uint16足以表示
	visited["0000"] = 0

	var cur string
	var curSlice []byte
	var nexts [8]string
	var origin byte
	for len(queue) != 0 {
		cur = queue[0]		// 取出当前待处理的锁状态（或者说无向图的节点）
		queue = queue[1:]	// 出队
		curSlice = []byte(cur)		// 转为切片

		// 获取当前状态下一步的所有（8个）可能状态
		for i:=0; i<4; i++ {	// 对每一位进行变动。
			origin = curSlice[i]	// 备份下原始的字符
			// 正向转动转盘
			curSlice[i] = (curSlice[i] - '0' + 1) % 10 + '0'		// '0'~'9'的字符减去'0' 变为整型，来和1作加减，外边再 + '0'又转为字符
			nexts[2*i] = string(curSlice)
			curSlice[i] = origin		// 恢复原始状态
			// 反向转动转盘
			curSlice[i] = (curSlice[i] - '0' + 9) % 10 + '0'		// 如果是-1会出现负数情况，不好处理。循环左移的技巧
			nexts[2*i+1] = string(curSlice)
			curSlice[i] = origin
		}

		// 遍历下一步的所有可能状态
		for _, next := range nexts {
			if _, ok := visited[next]; !ok && !dead[next] {		// 没有访问过，也不是dead
				queue = append(queue, next)						// 入队
				visited[next] = visited[cur] + 1				// 步数增加
				if next == target {return int(visited[next])}		// 如果到达目标，就返回最少需要的步数
			}
		}

	}

	return -1
}

// 3.双向BFS. 从"0000"和target两头开始搜索，直到中间碰头
// 参考题解区HUANT的题解。他用了三个小技巧：
// 一个是将字符串转为数字然后用数组按下标索引。
// （这一点我不太清楚字符串转数字的开销大还是哈希表查找的开销大，但肯定内存消耗降低了。尤其是go中字符串转数字需要处理error，除非自己额外实现。比较麻烦暂不使用）
// 另一点是他直接将死亡数组里的字符串提前加入到访问标记集合中！这节省了一大笔内存开销，而且也是可行的，采用。
// 第三点是，由于他每次递归调用的过程里都会全部使用掉队列里的待处理字符串。所以不讲究顺序，只要找到了，仍然是最短路径！
// 而且它需要比较两个所谓的队列是否包含有同一个元素！
//// 因此他使用的是哈希集而不是队列（访问性能更高）限于后面这个致命的原因，我也只能用哈希集合来保证O(1)的匹配，
// 经过调试，HUANT的答案是有错漏的。我改正后最终完成版性能很好
//43/43 cases passed (20 ms)
//Your runtime beats 100 % of golang submissions
//Your memory usage beats 100 % of golang submissions (6.1 MB)
func Sol_1_3(deadends []string, target string) int {
	if target == "0000" {return 0}					// 出发即是终点，特殊
	visited := make(map[string]bool)
	for _, v := range deadends {visited[v] = true}		// 死亡字符串提前“访问”过
	if visited["0000"] {return -1}						// 直接死锁

	// BFS --------------------------------------------------------------
	startQueue := make(map[string]bool)						// 构造处理字符串队列。用于从起点侧开始搜索
	startQueue["0000"] = true							// 起点
	endQueue := make(map[string]bool)						// 构造处理字符串队列。用于从终点侧开始搜索
	endQueue[target] = true

	return BFS(startQueue, endQueue, visited, 0)		// count从0开始
}

// BFS. 用BFS模拟了双向搜索的步骤。 count为第几步
func BFS(start, end, visited map[string]bool, count int) int {
	// 默认从start端开始

	//fmt.Println("len(start/end)= ", len(start))

	if len(start) <= 0 {
		return -1
	} // 出现断层 (就是start这边搜索不到过去target的路径了，其队列就没有东西存着)
	if len(start) > len(end) { // 从小的那一端开始
		return BFS(end, start, visited, count)
	}

	change := []uint8{9, 1}        // 转动数字的增量。9代表向后反转。注意要是uint8（byte是它的别名）
	nexts := make(map[string]bool) //存储start端搜索的下一步需要处理的状态点字符串
	var curSlice []byte
	var origin byte
	var nextStr string // 下一步的状态（字符串）

	// 处理start队列（从队头到队尾，这由slice遍历机制决定）
	for cur := range start {
		visited[cur] = true    // 标记为已访问
		curSlice = []byte(cur) // 字符串转为[]byte
		for i := 0; i < 4; i++ { // 遍历四位数字（四个轮盘状态）
			origin = curSlice[i] // 备份当前字符
			for j := 0; j < 2; j++ { // 正反转动
				curSlice[i] = (curSlice[i]-'0'+change[j])%10 + '0'
				nextStr = string(curSlice)
				if !visited[nextStr] {
					if _, ok := end[nextStr]; ok { // end队列也有，说明碰撞了，下一步就可以见面
						count++
						return count
					} else {
						nexts[nextStr] = true
						//fmt.Printf("(%d, %d)\n", i, j)
					}
				}
				curSlice[i] = origin // 复原单词
			}
		}
	}
	count++
	return BFS(nexts, end, visited, count)
}

func main(){

}