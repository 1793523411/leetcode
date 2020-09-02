package main

import()

//暴力解法
func trap(height []int)int{
	l :=len(height)
	res :=0
	// 起始位置是第一个，而不是0
	// 结束位置是倒数第二个，而不是倒数第一个
	for i:=1;i<l-1;i++{
		leftMax :=0
		//
		for k:=0;k<=i;k++{
			leftMax =max(height[k],leftMax)
		}
		rightMax :=0
		for j:=i;j<l;j++{
			rightMax =max(height[j],rightMax)
		}
		minVal := min(leftMax,rightMax)
        water := minVal-height[i]
        res =res+water
	}
	return res
}

//动态规划，比暴力快了许多
func trap2(height []int)int{
    if len(height)==0{
		return 0
	}
	size :=len(height)
	res :=0
	leftDP :=make([]int,size)
	rightDP :=make([]int,size)
	leftDP[0]= height[0]
	rightDP[size-1] = height[size-1]

	for i:=1;i<size;i++{
		leftDP[i] = max(leftDP[i-1],height[i])
	}
	for i:=size-2;i>=0;i--{
		rightDP[i] = max(rightDP[i+1],height[i])
	}
	for i:=1;i<size-1;i++{
		minHeight := min(leftDP[i],rightDP[i])
		waterVal :=minHeight-height[i]
		res +=waterVal
	}
	return res
}


func max(a,b int)int{
	if a>b{
		return a
	}
	return b
}

func min(a,b int)int{
	if a>b{
		return b
	}
	return a
}

func main()  {
	
}