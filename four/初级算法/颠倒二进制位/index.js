/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    return parseInt(n.toString(2).split('').reverse().join('').padEnd(32, 0), 2)
};

var reverseBits = function(n) {
    // 关键 获取最后一位1 x & 1
    let count = 32, res = 0

    while (count--) {
        res *= 2 // res左移 不使用 res = res << 1的原因是为了处理负数 乘积值肯定是正数
        res += n & 1 // 取 n 最后一位值
        n = n >> 1 // n 右移
    }

    return res
};