class Solution {
    //支付手续费
    public int maxProfit(int[] prices, int fee) {
        int n = prices.length;
        int[][] dp = new int[n][2];
        //初始化第一天
        dp[0][0] = 0;
        dp[0][1] = -prices[0];
        for(int i=1;i<n;++i) {
            //求第i天的买入最大利润，卖出最大利润
            dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]+prices[i]-fee);
            dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]-prices[i]);
        }
        return Math.max(dp[n-1][0],dp[n-1][1]);
    }


    public int maxProfit2(int[] prices, int fee) {
        int n = prices.length;
        //初始化第一天
        int dp0 = 0;
        int dp1 = -prices[0];
        for(int i=1;i<n;++i) {
            //这里的dp0相当于二维数组的dp[i][0]
            //dp1相当于dp[i][1]
            int tmp = dp0;
            dp0 = Math.max(dp0,dp1+prices[i]-fee);
            dp1 = Math.max(dp1,tmp-prices[i]);
        }
        return Math.max(dp0,dp1);
    }

}