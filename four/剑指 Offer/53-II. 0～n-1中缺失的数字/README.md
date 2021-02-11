# 53 0 ～ n-1 中缺失的数字

```
一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

 

示例 1:

输入: [0,1,3]
输出: 2
示例 2:

输入: [0,1,2,3,4,5,6,7,9]
输出: 8
 

限制：

1 <= 数组长度 <= 10000
```

## 一一对应

```js
var missingNumber = function (nums) {
  nums.push("x"); //防止缺失的是最后一个
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) return i;
  }
};
```

## 二分查找

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let len = nums.length;
  //判断是否是第一个或者最后一个缺失，这样判断了下面二分查找就不用处理边界值了
  if (nums[0] != 0) {
    return 0;
  }
  if (nums[len - 1] != len) {
    return len;
  }
  //开始二分查找
  let i = 0,
    j = len - 1,
    mid;
  //每一次循环都会把区间缩小，最后只剩左右区间挨着，他们中间的数即为缺失的数，判断分界点的时候就可以直接return
  while (i < j) {
    mid = Math.floor((i + j) / 2);
    //如果此点的值与索引号对应，说明在此点之后缺失
    if (nums[mid] == mid) {
      //判断是否是在分界点缺失
      if (nums[mid + 1] != mid + 1) return mid + 1;
      i = mid + 1;
    } else {
      //判断是否是在分界点缺失
      if (nums[mid - 1] == mid - 1) return mid;
      j = mid - 1;
    }
  }
};
```

或者这样

```js
var missingNumber = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = (right + left) >> 1;
    if (nums[mid] === mid) {
      // 小了
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
```

## 异或运算

```js
var missingNumber = function (nums) {
  let res = nums.length;
  nums.forEach((item, index) => {
    res ^= item ^ index;
  });
  return res;
};
```
