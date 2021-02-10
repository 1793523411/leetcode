# 连续子数组的最大和

```
输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为O(n)。

 

示例1:

输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 

提示：

1 <= arr.length <= 10^5
-100 <= arr[i] <= 100
```

## 暴力解法

```js
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

```

## 动态规划


动态规划的是首先对数组进行遍历，当前最大连续子序列和为 sum，结果为 ans

如果 sum > 0，则说明 sum 对结果有增益效果，则 sum 保留并加上当前遍历数字

如果 sum <= 0，则说明 sum 对结果无增益效果，需要舍弃，则 sum 直接更新为当前遍历数字

每次比较 sum 和 ans的大小，将最大值置为ans，遍历结束返回结果

时间复杂度：O(n)O(n)


```js
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
```

另一种使用状态转移方程的写法

```js
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
```

## 贪心

```js
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
```