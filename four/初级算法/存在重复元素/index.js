/**
 * @param {number[]} nums
 * @return {boolean}
 */
//Set
var containsDuplicate = function (nums) {
    return new Set(nums).size !== nums.length
};

//Map
var containsDuplicate = function (nums) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!map.get(nums[i])) { map.set(nums[i], 1) }
        else return true
    }
    return false
};

//暴力

var containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] == nums[j]) return true
        }
    }
    return false
};