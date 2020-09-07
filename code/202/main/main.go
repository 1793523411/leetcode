package main

import()

func isHappy(n int) bool {
	n = step(n)
	m :=make(map[int]struct{},0)
	for n!=1{
		if _,ok:=m[n];!ok{
		  m[n]= struct{}{}
		  n =step(n)
	  }else {
		  return false
	  }
	}
	return true
}

func isHappy2(n int) bool {
    slow, fast := n, step(n)
    for fast != 1 && fast != slow {
        slow = step(slow)
        fast = step(step(fast))
    }
    return fast == 1
}

func step(n int) int {
    res := 0
    for n > 0 {
        res += (n%10) * (n%10)
        n /= 10
    }
    return res
}


func main(){

}