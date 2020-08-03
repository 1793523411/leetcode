package main

import(
	"list"
	"strings"
)

func decodeString(s string) string {
    type pair struct {
        mul int         //当前[]中字符串的倍数
        last string    //是上个 [ 到当前 [ 的字符串
    }
    stack := list.New()
    var multi int = 0
    var res string = ""
    for _, v := range s {
        if v >= '0' && v <= '9' {
            multi = multi * 10 + int(v - '0')   //统计下一个[前的倍数
        }else if v == '[' {
            stack.PushBack(pair{multi, res})    //把当前[前所有的字符串组成的序列和当前[倍数压入栈
            multi, res = 0, ""
        }else if v == ']' {
            temp := stack.Back().Value.(pair)       
            stack.Remove(stack.Back())
            res = temp.last + strings.Repeat(res, temp.mul)   //字符串拼接
        }else {
            res += string(v)                        //遇到字母就直接拼接到当前res中直到遇到]时就进行
                                                        //更新字符串序列
        }
        
    }
    return res
}

// 执行用时：0 ms, 在所有 Go 提交中击败了100.00% 的用户
// 内存消耗：2 MB, 在所有 Go 提交中击败了100.00% 的用户


func main(){

}