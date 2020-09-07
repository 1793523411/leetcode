package main

import()

func intersection(nums1 []int, nums2 []int) []int {
    hash := make(map[int]bool)
    res := make([]int, 0)

    for _, v := range nums1 {
        hash[v] = true
    }

    for _, v := range nums2 {
        if hash[v] == true {
            res = append(res, v)
            hash[v] = false
        }
    }
    return res
}

func main(){}