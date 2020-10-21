class Solution {

    //最多可以完成 k 笔交易
    public int maxProfit(int k, int[] prices) {
        if (k < 1 ) { return 0; }

        // k 超过了上限，也就变成了 无限次交易问题
         if (k > prices.length / 2) {
             return maxProfitOfII(prices);
         }
        // 状态定义
        int [][] dp = new int[k][2];

        // 初始化
        for (int i = 0; i < k; i++) {
            dp[i][0] = Integer.MIN_VALUE;
        }
        // 遍历每一天，模拟 k 次交易，计算并更新状态
        for (int p : prices) {

            dp[0][0] = Math.max(dp[0][0], 0 - p);                  // 第 1 次买
            dp[0][1] = Math.max(dp[0][1], dp[0][0] + p);           // 第 1 次卖

            for (int i = 1; i < k; i++) {
                dp[i][0] = Math.max(dp[i][0], dp[i - 1][1] - p);   // 第 i 次买
                dp[i][1] = Math.max(dp[i][1], dp[i][0] + p);       // 第 i 次卖
            }
        }
        return dp[k - 1][1];
    }

    // 解决无限次交易的方法
     public int maxProfitOfII(int[] prices) {
        int res = 0;
        for (int i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1]) {
                res += prices[i] - prices[i - 1];
            }
        }
        return res;
    }
}
