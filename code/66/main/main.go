package main

import()

func plusOne(digits []int) []int {
    l := len(digits)
    
    if l == 0 {
        return []int{1}
    }

    for i := l-1; i>= 0; i-- {
        if digits[i] != 9 {
            digits[i]++
            return digits 
        } else {
            digits[i] = 0
        }
    }
    return append([]int{1}, digits...)
}
func main(){}