/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n < 1) return false;
    while (n % 3 == 0) {
        n /= 3;
    }
    return n == 1
};

//基准转换

var isPowerOfThree = function(n) {
    return /^10{0,}$/.test(n.toString(3))
};

//整数限制

var isPowerOfThree = function(n) {
    return n > 0 && 5559060566555523 % n === 0
};

//枚举

var isPowerOfThree = function(n, i = 0, tmp = 0) {
    while((tmp = Math.pow(3, i++)) < n) {}
    return tmp === n
};
