package main

func strStr(haystack string, needle string) int {
    if len(needle) == 0 {
        return 0
    }
    var i, j int
    // i不需要到len-1
    for i = 0; i < len(haystack)-len(needle)+1; i++ {
        for j = 0; j < len(needle); j++ {
            if haystack[i+j] != needle[j] {
                break
            }
        }
        // 判断字符串长度是否相等
        if len(needle) == j {
            return i
        }
    }
    return -1
}

func main(){}