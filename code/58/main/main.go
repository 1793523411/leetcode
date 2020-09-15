package main

import()

func lengthOfLastWord(s string) int {
    end := len(s)-1
    for ;end >= 0 && s[end] == ' '; end-- {}
    begin := end
    for ;begin >= 0 && s[begin] != ' '; begin-- {}
    return end - begin
}


func main(){}