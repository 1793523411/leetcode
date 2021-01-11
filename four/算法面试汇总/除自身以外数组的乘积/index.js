/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 两次遍历， 一次正向，一次反向。
// 维护一个数组，第i项代表前i个元素（不包括i）的乘积
var productExceptSelf = function (nums) {
    const ret = [];

    for (let i = 0, temp = 1; i < nums.length; i++) {
        ret[i] = temp;
        temp *= nums[i]
    }
    for (let i = nums.length - 1, temp = 1; i >= 0; i--) {
        ret[i] *= temp;
        temp *= nums[i]
    }
    return ret
};


//我就使用除法，哈哈哈😂
var productExceptSelf = function (nums) {
    let list = []
    let zeroNum = 0
    let noZero = 1
    // 记录0 出现的次数 和 去除0后 的乘积
    for (let num of nums) {
        num === 0 && zeroNum++
        num !== 0 && (noZero *= num)
    }
    for (let num of nums) {
        let total = 0
        if (num === 0) {  // 当前项为0
            zeroNum > 1 ? total = 0 : total = noZero
        } else {          // 当前项不为0
            // 0出现大于0次时, list就加入0, 否则 加入 总积 乘以 当前项的倒数
            zeroNum > 0 ? total = 0 : total = noZero * Math.pow(num, -1)
        }
        list.push(total)
    }
    return list
};
