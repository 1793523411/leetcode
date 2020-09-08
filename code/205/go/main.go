package main

import()

// 绝对匹配
func isIsomorphic(s string, t string) bool {
	if len(s) != len(t) { return false }
	// 通过两个哈希表
	// 哈希表1：key：s对应元素，value：t对应元素
	// 哈希表2：key：t对应元素，value：s对应元素
	hm := make(map[rune]rune)
	hm_t := make(map[rune]rune)

	for k,v := range s {
		// 2.1 如果哈希表1已经存在，判断是否对应的t元素相等，否则返回失败
		if val,ok := hm[v]; ok {
			if rune(t[k]) != val { return false }
		} else {
			// 保存哈希表1 kv信息
			hm[v] = rune(t[k])
		}

		// 2.2 如果哈希表2对应元素已经存在，判断是否对应的s元素相等，否则返回失败
		if val,ok := hm_t[rune(t[k])]; ok {
			if val != v {return false}
		} else {
			// 保存哈希表2 kv信息
			hm_t[rune(t[k])] = v
		}
	}
	return true
}

func isIsomorphic2(s string, t string) bool {
    mS, mT, n := [128]int{}, [128]int{}, len(s) // mS, mT分别记录s和t中每个字母的映射
    for i := 0; i < n; i++ {
        c1, c2 := s[i], t[i]
        if mS[c1] != mT[c2] { // c1和c2对应的映射不同时
            return false
        } else {
            if mS[c1] == 0 { // 当字母第一次出现时，将字符映射为所在位置加1
                mS[c1] = i+1
                mT[c2] = i+1
            }
        }
    }
    return true
}


func main(){}