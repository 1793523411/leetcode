# 滑动窗口的最大值

```
给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

示例:

输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7]
解释:

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 

提示：

你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。
```

## 使用 push+shift 来滑动窗口

一个好听的名字叫做双端队列

```js
var maxSlidingWindow = function (nums, k) {
  if (nums.length == 0) {
    return [];
  } //判断如果是空数组就直接返回
  var arr = [];
  for (
    var i = 0;
    i < k - 1;
    i++ //获取到数组初始的前k-1个数字加入到新数组中
  ) {
    arr.push(nums[i]);
  }
  var rarr = [];
  for (var i = k - 1; i < nums.length; i++) {
    arr.push(nums[i]); //加入下一个数
    rarr.push(Math.max(...arr)); //取最大值
    arr.shift(); //取出第一个数
  }
  return rarr;
};
```

## 使用 slice 截取来滑动窗口

```js
var maxSlidingWindow = function (nums, k) {
  if (!nums.length) return [];
  let res = [];
  for (let i = 0; i <= nums.length - k; i++) {
    res.push(Math.max(...nums.slice(i, k + i)));
  }
  return res;
};
```

## 暴力循环来滑动从窗口

```js
var maxSlidingWindow = function (nums, k) {
  if (nums.length === 0) return [];
  let stack = [];
  for (let i = 0; i < nums.length - k + 1; i++) {
    let arr = [];
    for (let j = i; j < i + k; j++) {
      arr.push(nums[j]);
    }
    stack.push(Math.max(...arr));
  }
  return stack;
};
```

## 两个指针来滑动窗口

**最快**

```js
var maxSlidingWindow = function (nums, k) {
  let n = nums.length;
  if (n == 0) {
    return [];
  }
  let cur = 0; // cur记录的当前最大值的索引，而不是值，方便后面的代码编写
  let left = 0;
  let right = 0;
  let res = [];
  while (right < n) {
    if (nums[cur] <= nums[right]) {
      cur = right;
    }
    right++;
    if (right - left == k) {
      // 扫描完成当前窗口
      res[left] = nums[cur];
      if (left == cur) {
        // 说明当前窗口的最大值索引在当前窗口的左窗口处
        left++;
        cur = left;
        right = left;
      } else {
        left++;
      }
      if (left == n - k + 1) {
        return res;
      }
    }
  }
  return res;
};
```
