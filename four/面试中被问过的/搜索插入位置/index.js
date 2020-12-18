/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target, l = 0, r = nums.length - 1) {
    while (l <= r) {
        var m = (l + r) >>> 1
        if (nums[m] === target) return m
        else if (nums[m] > target) r = m - 1
        else l = m + 1
    }
    return l
};



const searchInsert = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        if (target <= nums[i]) {
            return i;
        }
    }
    return nums.length;
};

