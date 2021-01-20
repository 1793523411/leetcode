/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    const dp = new Array(n + 1).fill(1);

    for (let i = 3; i <= n; ++i) {
        for (let j = 1; j < i; ++j) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
        }
    }

    return dp[n];
};

var cuttingRope = function (n) {
    if (n === 2) return 1;
    if (n === 3) return 2;
    // a的含义：n能拆成的3的个数
    const a = Math.floor(n / 3);
    const b = n % 3;

    // n是3的倍数
    if (b === 0) return Math.pow(3, a);
    // n是 3k + 1，例如7。拆成3、3、1。由于有1对结果无法有贡献，所以最后的3、1换成4
    if (b === 1) return Math.pow(3, a - 1) * 4;
    return Math.pow(3, a) * 2;
};