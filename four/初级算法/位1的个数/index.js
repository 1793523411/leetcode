/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    return n.toString(2).replace(/0/g, "").length
}

// 任何数字跟掩码1进行逻辑与运算，都可以获得这个数字都最低位
var hammingWeight = function (n) {
    let count = 0;
    let mask = 1;
    for (let i = 0; i < 32; i++) {
        if ((n && mask) != 0) {
            count++;
        }
        mask <<= 1;
    }
};

// 每次把数字最后一个二进制位1反转为0，sum++,当没有1可反的时候，数字变成了0
var hammingWeight = function (n) {
    let sum = 0
    while (n != 0) {
        sum++
        n &= (n - 1)
    }
    return sum
};

//模拟十转二进制、取模,">>>"为无符号左边填充0，">>"为有符号填充
var hammingWeight = function (n) {
    let count = 0;
    while (n) {
        // n % 2 == 1
        if (n & 1 == 1) {
            count++;
        }
        n >>>= 1;
    }
}

