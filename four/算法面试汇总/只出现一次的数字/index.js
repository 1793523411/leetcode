/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let ans = nums[0]
    if (nums.length > 1) {
        for (let i = 1; i < nums.length; i++) {
            ans = ans ^ nums[i]
        }
    }
    return ans
};
var singleNumber = function (nums) {
    let map = new Map()
    for (let i of nums) {
        let count = map.get(i)
        count = count === undefined ? 1 : ++count;
        map.set(i, count)
    }
    for (let i of map) {
        if (i[1] === 1) {
            return i[0]
        }
    }
};

// 时间复杂度：o(n)
// 空间复杂度：o(n)