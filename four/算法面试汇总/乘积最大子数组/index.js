/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let res = nums[0]
    let preMin = nums[0];
    let preMax = nums[0];
    let temp1 = 0, temp2 = 0
    for (let i = 1; i < nums.length; i++) {
        temp1 = preMin * nums[i];
        temp2 = preMax * nums[i]
        preMin = Math.min(temp1, temp2, nums[i])
        preMax = Math.max(temp1, temp2, nums[i])
        res = Math.max(preMax, res)
    }
    return res
};