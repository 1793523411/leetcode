/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    // dp[i] 前i天卖出的最大利润
    // min : prices 前i项中的最小值
    // prices[i] - min: 当前位置卖出可得最大利润
    // dp[i - 1] : 前i-1项目卖出可得的最大利润
    if (!prices || !prices.length) return 0

    const len = prices.length, dp = new Array(len).fill(0)
    let min = prices[0] // 前i项的最小值

    for (let i = 1, price; i < len; i++) {
        price = prices[i]
        min = Math.min(min, price)
        dp[i] = Math.max(dp[i - 1], price - min )
    }

    return dp[len - 1]
};
var maxProfit = function(prices) {
    //我们只关心 max 与 min 故不需要再构建dp 数组
    if (!prices || !prices.length) return 0

    let min = Number.MAX_SAFE_INTEGER, max = 0

    for (let i = 0, price; i < prices.length; i++) {
        price = prices[i]
        min = Math.min(min, price)
        max = Math.max(max, price - min)
    }

    return max
};
var maxProfit = function(prices) {
    if (!prices || !prices.length) return 0

    const len = prices.length
    let max = 0, cur = 0, next = 0

    for (let i = 0; i < len; i++) {
        cur = prices[i]
        for (let j = i + 1; j < len; j++) {
            next = prices[j]
            if (next > cur) {
                max = Math.max(max, next - cur)
            }
        }
    }

    return max
};
