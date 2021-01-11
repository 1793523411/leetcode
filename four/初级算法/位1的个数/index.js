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


//布赖恩·克尼根算法（推荐）它用于快速判断二进制中有多少个 1。它是借助 num & (num - 1) 来直接去除 num 的二进制中最右边的 1。

//相较于普通移位判断，布赖恩·克尼根算法是高效的：它直接跳过了二进制中的 0，有多少个 1 就判断多少次。

// 在使用布赖恩·克尼根算法之前，需要借助 ^ 运算，让不同的位变 1，相同的位变 0。最后再统计二进制中有多少 1 即可。