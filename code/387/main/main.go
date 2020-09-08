package main

import()

// 声明一个int数组，记录 每个字母的最后一次出现的所在索引
func firstUniqChar(s string) int {
    var lf [26]int
    for i, ch := range s {
        lf[ch - 'a'] = i
    }
    for i, ch := range s {
        if i == lf[ch - 'a'] {
            return i
        } else {
            lf[ch - 'a'] = -1
        }
    }
    return -1
}


func main(){

}