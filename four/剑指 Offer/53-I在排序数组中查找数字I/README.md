# 在排序数组中查找数字 I

```
统计一个数字在排序数组中出现的次数。

 

示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: 2
示例 2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: 0
 

限制：

0 <= 数组长度 <= 50000
```

## 使用 javascript API

```js
var search = function (nums, target) {
  res = 0;
  while (nums.indexOf(target) != -1) {
    res++;
    nums.splice(nums.indexOf(target), 1);
  }
  return res;
};
```

```js
var search = function (nums, target) {
  let i = nums.indexOf(target);
  let j = nums.lastIndexOf(target);
  return i !== -1 ? j - i + 1 : 0;
};
```

## 常规解法使用循环

```js
var search = function (nums, target) {
  if (!nums.length) return 0;

  let left = 0,
    right = nums.length - 1;
  while (nums[left] !== target && left < nums.length) {
    ++left;
  }
  while (nums[right] !== target && right >= 0) {
    --right;
  }

  return left <= right ? right - left + 1 : 0;
};
```

## 二分查找提速

```js
var search = function (nums, target) {
  const length = nums.length;
  let start = -1,
    end = -1;

  let left = 0,
    right = length - 1;
  // 找到左边界：找到第一次出现
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      start = mid;
      right = mid - 1; // important
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  left = 0;
  right = length - 1;
  // 找到右边界：找到第2次出现
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      end = mid;
      left = mid + 1; // important
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return start <= end && start !== -1 ? end - start + 1 : 0;
};
```

还有一种使用二分查找查找到开始计数

```js
var search = function (nums, target) {
  let i = 0;
  let j = nums.length;
  let res = 0;
  while (i < j) {
    let m = i + ((j - i) >> 1);
    if (nums[m] == target) {
      // 找到了, 往两边计数
      res++; // 找到了, 先计个数
      let t = m;
      while (nums[--m] === target) res++; // 左边计数
      while (nums[++t] === target) res++; // 右边计数
      return res;
    } else if (nums[m] < target) {
      // 中间值小于目标, 说明目标在右侧
      i = m + 1;
    } else {
      // 大于目标, 说明在左侧
      j = m;
    }
  }
  return res;
};
```
