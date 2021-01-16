/**
 * @param {number} n
 * @return {number}
 */
//动态规划
var fib = function (n) {
    let dp = [0, 1];
    function f(n) {
        if (dp[n] != undefined) {
            return dp[n];
        }
        dp[n] = f(n - 1) + f(n - 2);
        return dp[n] % 1000000007;
    }
    return f(n);
};

var fib = function (n) {
    let dp = [];
    dp[0] = 0;
    dp[1] = dp[2] = 1;
    for (let i = 3; i <= n; i++) dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
    return dp[n] % 1000000007;
};

//空间压缩
var fib = function (n) {
    if (n == 0) return 0;
    if (n == 2 || n == 1) return 1;
    let prev = 1,
        curr = 1;
    for (let i = 3; i <= n; i++) {
        let sum = prev + curr;
        prev = curr;
        curr = sum % 1000000007;
    }
    return curr % 1000000007;
};

//尾递归
var fib = function (n) {
    "use strict";
    function f(n, a = 1, b = 1) {
        if (n <= 1) return n;
        if (n == 2) return b;
        return f(n - 1, b, (a + b) % 1000000007); //最后一步，调用自身，将数据处理的步骤变成参数的变化
    }
    return f(n);
};