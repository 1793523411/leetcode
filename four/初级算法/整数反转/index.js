/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    const border = 2 ** 31
    const max = border - 1
    const min = -border



    let res = Math.abs(x)
    res = +(res + "").split("").reverse().join("")

    if (res > max) return 0
    if (res < min) return 0

    return x > 0 ? res : -res
};

//使用位运算
var reverse = function (x) {
    let res = 0;
    while (x != 0) {
        res = res * 10 + x % 10;
        x = (x / 10) | 0
    }
    return (res | 0) === res ? res : 0
};

// result * 10 + x % 10 取出末位 x % 10（负数结果还是负数，无需关心正负），拼接到 result 中。
// x / 10 去除末位，| 0 强制转换为32位有符号整数。
// 通过 | 0 取整，无论正负，只移除小数点部分（正数向下取整，负数向上取整）。
// result | 0 超过32位的整数转换结果不等于自身，可用作溢出判断。
