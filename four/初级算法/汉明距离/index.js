/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let dis = 0;
    let mask = 0x01;
    let times = 0;
    while (times < 31) {
        //获取最后一位
        if ((x & mask) !== (y & mask)) {
            ++dis;
        }
        mask = mask << 1;
        ++times
    }
    return dis
};

//布赖恩·克尼根算法（推荐）它用于快速判断二进制中有多少个 1。它是借助 num & (num - 1) 来直接去除 num 的二进制中最右边的 1。

//相较于普通移位判断，布赖恩·克尼根算法是高效的：它直接跳过了二进制中的 0，有多少个 1 就判断多少次。

// 在使用布赖恩·克尼根算法之前，需要借助 ^ 运算，让不同的位变 1，相同的位变 0。最后再统计二进制中有多少 1 即可。

var hammingDistance = function (x, y) {
    let v = x ^ y;
    let dis = 0;
    while (v) {
        v = v & (v - 1);
        ++dis
    }
    return dis
}
