/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0
    let p = 0, q = 1;
    while (q < nums.length) {
        if (nums[p] != nums[q]) {
            nums[p + 1] = nums[q]
            p++;
        }
        q++
    }
    return p + 1
};

var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0
    let p = 0, q = 1;
    while (q < nums.length) {
        if (nums[p] != nums[q]) {
            if (q - p > 1) {
                nums[p + 1] = nums[q]
            }
            p++;
        }
        q++
    }
    return p + 1
};

// 时间复杂度均为 o(n)
// 空间复杂度均为 o(1)