package main

import()

func numJewelsInStones(J string, S string) int {
	m :=make(map[byte]struct{})
   for i :=range J{
		m[J[i]]= struct{}{}
   }
   var res int
   for i :=range S{
	   if  _,ok:=m[S[i]];ok{
		   res++
	   }
   }
   return res
}


func main(){}