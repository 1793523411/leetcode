public class Solution2 {
    //动态规划
    public int numSquares(int n) {
        int[] dp = new int[n+1];
        for(int i = 1;i<=n;i++){
            dp[i] = i;
            for(int j = 1;i-j*j >= 0;j++){
                // 可能有同学没看懂, 首先要取两种结果里面的较小值是因为有两种不同的取法, 一种是全部都用1的平方来组成, 另一种就是将n分为两部分, 一部分是最大平方数(占一个位置, 所以加一), 另一部分就是numSquares(n - 最大平方数), 至于numSquares(n - 最大平方数)的值是多少可以继续转移下去
                dp[i] = Math.min(dp[i],dp[i-j*j]+1)
            }
        }
        return dp[n]
    }
}
