var maxProfit = function (prices) {
    var min = prices[0],
        sum = 0;
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        sum = Math.max(sum, prices[i] - min);
    }
    return sum;
};

var maxProfit = function (prices) {
    let max = 0
    for (let i = 1; i < prices.length; i++) {
        for (let j = 0; j < i; j++) {
            let res = prices[i] - prices[j];
            max = Math.max(res, max);
        }
    }
    return max;
};