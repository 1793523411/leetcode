var dicesProbability = function (n) {
    if (n < 1) {
        return [];
    }
    const res = [0, 1, 1, 1, 1, 1, 1];
    for (let i = 1; i < n; i++) {
        for (let j = 6 * n; j > 0; j--) {
            res[j] = res
                .slice(Math.max(0, j - 6), j)
                .reduce((acc, cur) => acc + cur, 0);
        }
    }
    return res
        .slice(1)
        .map((num) => num / Math.pow(6, n))
        .filter(Boolean);
};

var dicesProbability = function (n) {
    let dp = [1 / 6, 1 / 6, 1 / 6, 1 / 6, 1 / 6, 1 / 6];
    for (let i = 2; i <= n; i++) {
        const temp = [];
        for (let j = 1; j <= 6; j++) {
            for (let k = 0; k < dp.length; k++) {
                const sum = k + j - 1;
                temp[sum] = (temp[sum] || 0) + (dp[k] * 1) / 6;
            }
        }
        dp = temp;
    }
    return dp;
};