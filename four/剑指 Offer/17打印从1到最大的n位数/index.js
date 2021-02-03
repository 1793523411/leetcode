/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    res = [];
    end = Math.pow(10, n) - 1;
    for (let i = 0; i < end; i++) {
        res[i] = i + 1;
    }
    return res;
}


var printNumbers = function(n) {
    let base = 10, sum = 1, res = [];

    while (n != 0) {
        if ((n & 1) == 1) {
            // 如果当前二进制最后一位为1
            sum *= base;
        }
        n >>= 1;
        base *= base;
    }
    let i = 1;

    while (i < sum) {
        res.push(i++);
    }
    return res;
};