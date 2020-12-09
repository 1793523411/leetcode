/**
 * @param {number[]} prices
 * @return {number}
 */
//!尽可能地完成更多的交易（多次买卖一支股票
var maxProfit = function (prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        let tmp = prices[i] - prices[i - 1];
        if (tmp > 0) profit += tmp
    }
    return profit
};

// 时间复杂度：o(n)
// 空间复杂度: o(1)