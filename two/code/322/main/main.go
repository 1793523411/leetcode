package main

func coinChange(coins []int, amount int) int {
	dp := make([]int, amount + 1)
	for i := 1; i <= amount; i++ {
			dp[i] = -1
			for _, c := range coins {
					if i < c || dp[i-c] == -1 {
							continue
					}
					
					count := dp[i-c] + 1
					if dp[i] == -1 || dp[i] > count {
							dp[i] = count
					}
			}
	}
	
	return dp[amount]
}

func main(){}