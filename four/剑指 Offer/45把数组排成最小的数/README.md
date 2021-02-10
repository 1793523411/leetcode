# 把数组排成最小的数

```
输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

 

示例 1:

输入: [10,2]
输出: "102"
示例 2:

输入: [3,30,34,5,9]
输出: "3033459"
 

提示:

0 < nums.length <= 100
说明:

输出结果可能非常大，所以你需要返回一个字符串而不是整数
拼接起来的数字可能会有前导 0，最后结果不需要去掉前导 0
```

## 解法一

思路：如果有两个数 x 和 y，当 x + y < y + x 的时候，x 排在前面。

例如：10 和 1，比较'10' + '1' 和 '1' + '10'，也就是 101 和 110，结果是 10 排前面，1 排后面。

```js
var minNumber = function (nums) {
  nums.sort(function (a, b) {
    return Number(`${a}${b}`) - Number(`${b}${a}`);
  });
  return nums.join("");
};
```


## 解法二

暴力法是通过回溯得到所有可能的排列结果，然后从其中挑选出最小的数字。

这种方法容易想到，虽然能得到正确结果，但是时间复杂度过高，会 TLE。

```js
/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    const result = [];
    permutation(nums, 0, result);
    result.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
    return result[0];
};

/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number[]} result
 */
function permutation(nums, start, result) {
    if (start === nums.length) {
        result.push(nums.join(""));
        return;
    }

    for (let i = start; i < nums.length; ++i) {
        [nums[i], nums[start]] = [nums[start], nums[i]];
        permutation(nums, start + 1, result);
        [nums[start], nums[i]] = [nums[i], nums[start]];
    }
}
```