/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};
var twoSum = function (nums, target) {
    let tmp = [...nums]
    nums.sort((a, b) => a - b)
    let j = nums.length - 1
    let i = 0
    while (i < j) {
        if (nums[i] + nums[j] === target) {
            if (nums[i] === nums[j]) return [tmp.indexOf(nums[i]), tmp.lastIndexOf(nums[j])]
            return [tmp.indexOf(nums[i]), tmp.indexOf(nums[j])]
        }
        if (nums[i] + nums[j] > target) j--;
        if (nums[i] + nums[j] < target) i++;
    }
};

//吧map用上
var twoSum = function (nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.get(target - nums[i]) !== undefined) {
            return [map.get(target - nums[i]), i]
        }
        map.set(nums[i], i)
    }
};
