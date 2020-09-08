package main

import()

func findRestaurant(list1 []string, list2 []string) []string {
    list1Map := map[string]int{}

    for k, v := range list1 {
        list1Map[v] = k
    }

    result := []string{}
    maxLength := 2000

    for k, v := range list2 {
        x, ok := list1Map[v]
        if ok {
            if x + k < maxLength {
                maxLength = x + k
                result = []string{v}
            } else if x + k == maxLength {
                result = append(result, v)
            }
        }
    }

    return result
}

func main(){}