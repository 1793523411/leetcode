package main

import (
	"math"
	"strconv"
	"fmt"
	"strings"
)

func intToRoman(num int) string {
	roman := []string{"I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"}
	intSlice := []int{1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000}
	s := ""
	x := len(intSlice) - 1
	for ; num != 0 ; {
		i := len(strconv.Itoa(num)) - 1
		n := (num / int(math.Pow10(i))) * int(math.Pow10(i))
		for ; x >= 0;x-- {
			if n >= intSlice[x] {
				s += roman[x]
				num -= intSlice[x]
				break
			}
		}
	}
	return s
}

func intToRoman2(num int) string {
	converMap := map[int]string {
		1:    "I",
		4:    "IV",
		5:    "V",
		9:    "IX",
		10:   "X",
		40:   "XL",
		50:   "L",
		90:   "XC",
		100:  "C",
		400:  "CD",
		500:  "D",
		900:  "CM",
		1000: "M",
	}
	converList := []int{1000,900,500,400,100,90,50,40,10,9,5,4,1}
	resultStr := []string{}
	for i:=0 ; i<len(converList) && num != 0 ;i++ {
		count := num / converList[i]
		num = num - count*converList[i]
		for count != 0 {
			// fmt.Println(count)
			// fmt.Println(i)
			resultStr = append(resultStr, converMap[converList[i]])
			count--
		}
	}
	return strings.Join(resultStr, "")
}

func main (){
	// fmt.Println(intToRoman(3))
	// fmt.Println(intToRoman2(58))
	// fmt.Println(intToRoman2(1994))
	fmt.Println(intToRoman2(800))
}	