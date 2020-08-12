//暴力解法，用时很长
// 执行用时：4248 ms, 在所有 JavaScript 提交中击败了8.99% 的用户
// 内存消耗：39.6 MB, 在所有 JavaScript 提交中击败了33.33% 的用户
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend >= 2147483647 && divisor === 1) {
        return 2147483647;
    }
    if (dividend >= 2147483647 && divisor === -1) {
        return -2147483648;
    }
    if (dividend <= -2147483648 && divisor === 1) {
        return -2147483648;
    }
    if (dividend <= -2147483648 && divisor === -1) {
        return 2147483647;
    }
    let first = Math.abs(dividend);
    let second = Math.abs(divisor);
    let rest = first - second;
    let count = 0;
    if (rest >= 0) {
        count = 1;
    }
    while(rest >= second) {
        count++;
        rest = rest - second;
    }
    if ((dividend < 0 & divisor > 0) | (dividend > 0 & divisor < 0) ) {
        count = 0 - count;
    }
    return count;
};
