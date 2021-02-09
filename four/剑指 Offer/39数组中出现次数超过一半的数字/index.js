/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    nums.sort((a, b) => a - b)
    return nums[nums.length >> 1]
};


var majorityElement = function (nums) {
    let cand_num = nums[0], count = 1;
    for (let i = 1; i < nums.length; ++i) {
        if (cand_num == nums[i]) {
            ++count
        } else if (--count == 0) {
            cand_num = nums[i]
            count = 1;
        }
    }
    return cand_num;
};
