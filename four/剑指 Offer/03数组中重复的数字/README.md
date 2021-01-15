# 找出数组中重复的数字。

```
在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例 1：

输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3
 

限制：

2 <= n <= 100000
```

## 使用 indexof 查找

遍历数组，每次循环 res 暂存数组第一个元素，再将第一个元素用 shift()方法删除，indexOf()方法判断剩下元素中有没有和 res 相同的元素，没有则 i++；有则返回结果 res

```js
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
```

## 使用 set

使用 set,因为 set 自动忽略重复元素，遍历数组中元素，若长度未增加，则输出当前元素

```js
var findRepeatNumber = function (nums) {
  let s = new Set();
  for (let i in nums) {
    let curLen = s.size;
    s.add(nums[i]);
    if (s.size === curLen) return nums[i];
  }
};
```

## 使用 map

```js
var findRepeatNumber = function (nums) {
  const map = {};
  for (const num of nums) {
    if (!map[num]) {
      map[num] = true;
    } else {
      return num;
    }
  }
};
```

## 原地哈希

从题目描述可以知道，所有数字都在 0 ～ n-1 的范围内。因此不需要额外开辟空间，每次遍历时，检查当前元素是否放在了正确位置上（例如元素 i 应该放在下标为 i 的位置上）。如果放在了正确位置上，那么继续循环。否则：

下标为 num 的元素 === num，说明当前元素 num 是重复的，直接返回
下标为 num 的元素 !== num，交换当前元素和下标为 num 的元素，将当前元素放入到正确位置上

```js
var findRepeatNumber = function (nums) {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    while ((num = nums[i]) != i) {
      if (num == nums[num]) {
        return num;
      }
      [nums[i], nums[num]] = [nums[num], nums[i]];
    }
  }
};
```

## 排序过后判断

```js
var findRepeatNumber = function (nums) {
  nums.sort();
  for (let i = 0; i < nums.length; ) {
    if (nums[i++] == nums[i]) return nums[i];
  }
  return null;
};
```

## 无脑 for 循环

```js
var findRepeatNumber = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) return nums[i];
    }
  }
  return null;
};
```