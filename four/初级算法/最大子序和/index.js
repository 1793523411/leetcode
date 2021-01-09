/**
 * @param {number[]} nums
 * @return {number}
 */
//动态规划
var maxSubArray = function (nums) {
    let ans = nums[0];
    let sum = 0;
    for (const num of nums) {
        // if (sum > 0) {//也可写成
        if (sum + num > num) {
            sum += num;
        } else {
            sum = num;
        }
        ans = Math.max(ans, sum);
    }
    return ans;
};

// 动态规划的是首先对数组进行遍历，当前最大连续子序列和为 sum，结果为 ans
// 如果 sum > 0，则说明 sum 对结果有增益效果，则 sum 保留并加上当前遍历数字
// 如果 sum <= 0，则说明 sum 对结果无增益效果，需要舍弃，则 sum 直接更新为当前遍历数字
// 每次比较 sum 和 ans的大小，将最大值置为ans，遍历结束返回结果
// 时间复杂度：O(n)O(n)

//!一种好理解的动态规划
var maxSubArray = function (nums) {
    let dp = [];
    dp[0] = nums[0]
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        if (max < dp[i]) {
            max = dp[i]
        }
    }
    return max;
}

//贪心
var maxSubArray = function (nums) {
    let result = -Number.MAX_VALUE;
    let numsSize = nums.length;
    let sum = 0
    for (let i = 0; i < numsSize; i++) {
        sum += nums[i];
        result = Math.max(result, sum);
        if (sum < 0) {
            sum = 0;
        }
    }
    return result
};

//暴力解法
var maxSubArray = function (nums) {
    let max = -Number.MAX_VALUE;
    let numsSize = nums.length
    for (let i = 0; i < numsSize; i++) {
        let sum = 0
        for (let j = i; j < numsSize; j++) {
            sum += nums[j];
            max = Math.max(sum, max)
        }
    }
    return max
}
