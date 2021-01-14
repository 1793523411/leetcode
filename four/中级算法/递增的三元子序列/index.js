/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let one = Number.MAX_VALUE, two = Number.MAX_VALUE;
    for (const three of nums) {
        if (three > two) return true;
        else if (three <= one) one = three;
        else two = three
    }
    return false
};

//暴力
var increasingTriplet = function (nums) {
    let len = nums.length
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            if (nums[j] > nums[i]) {
                for (let k = j; k < len; k++) {
                    if (nums[k] > nums[j]) return true
                }
            }
        }
    }
    return false;
}
