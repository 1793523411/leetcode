/**
 * @param {number[]} nums
 * @return {number}
 */
//使用JavaScript的api indexof在数组中查找
var findRepeatNumber = function (nums) {
    let res;
    for (let i = 0; i < nums.length; i++) {
        res = nums[i];
        nums.shift();
        if (nums.indexOf(res) != -1) {
            return res;
        }
        i--;
    }
};

//使用set
var findRepeatNumber = function (nums) {
    let s = new Set()
    for (let i in nums) {
        let curLen = s.size;
        s.add(nums[i]);
        if (s.size === curLen)
            return nums[i]
    }
}

//使用map
var findRepeatNumber = function (nums) {
    const map = {};
    for (const num of nums) {
        if (!map[num]) {
            map[num] = true
        } else {
            return num;
        }
    }
}

//原地哈希
var findRepeatNumber = function (nums) {
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        while ((num = nums[i]) != i) {
            if (num == nums[num]) {
                return num
            }
            [nums[i], nums[num]] = [nums[num], nums[i]]
        }
    }
}