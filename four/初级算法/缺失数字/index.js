/**
 * @param {number[]} nums
 * @return {number}
 */
//等差数列求和公式，然后做差求出缺失的那个数
var missingNumber = function (nums) {
    const expectSum = nums.length * (nums.length + 1) / 2;
    let actualSum = 0;
    for (let num of nums) actualSum += num;
    return expectSum - actualSum;
};

//使用位运算,很妙，想起来’只出现一次的数字‘那道题
// 归零律：a ^ a = 0
// 恒等律：a ^ 0 = a
// 交换律：a ^ b = b ^ a
// 结合律：a ^ b ^ c = a ^ (b ^ c) = (a ^ b) ^ c;
// 自反：a ^ b ^ a = b.

var missingNumber = function(nums) {
    let missing = nums.length;
    for (let i = 0; i < nums.length; i++) {
        missing ^= i ^ nums[i];
    }
    return missing
};

//还可用哈希表或排序，然后再循环中依次寻找