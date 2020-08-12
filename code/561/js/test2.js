/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let sum = 0;
    nums.sort((a, b) => a - b).forEach((v, idx) => !(idx % 2) && (sum += v));
    return sum;
};
