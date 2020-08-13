/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
//滑动窗口
var minSubArrayLen = function(s, nums) {
    let left = 0;
    let sum = 0;
    let min = Infinity;//无穷大
    for(let right = 0; right < nums.length; right++){
        sum += nums[right];
        while(sum >= s){
            min = Math.min(min, right - left + 1);
            sum -= nums[left++];
        }
    }
    return min < Infinity ? min : 0;
};
