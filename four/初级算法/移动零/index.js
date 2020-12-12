/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] !== 0) {
                    //交换nums[i]和nums[j]
                    let temp = nums[i]
                    nums[i] = nums[j]
                    nums[j] = temp
                    break
                }
            }
        }
    }
};

var moveZeroes = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j++] = temp
        }
    }
};