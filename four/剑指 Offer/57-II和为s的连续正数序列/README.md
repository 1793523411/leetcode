# 和为 s 的连续正数序列

```
输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

 

示例 1：

输入：target = 9
输出：[[2,3,4],[4,5]]
示例 2：

输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]
 

限制：

1 <= target <= 10^5
```

## 滑动窗口

先把数分解 9=1+8=2+7=3+6=4+5,按这种，找到可能组成正确结果的数组，根据数的结构，易知结果可能存在`[1,2,3,4,5]`中，不难发现数组最后一个数,如果 target 是偶数就是 target/2,如果是奇数就是 target/2 取整加一，即 Math.floor(target/2)+1 或采用二进制取整(target/2 | 0) + 1,再对找到的数组采用滑动窗口模型，找出答案

```js
var findContinuousSequence = function (target) {
  let index = target % 2 === 0 ? target / 2 : ((target / 2) | 0) + 1;
  let res = [];
  let temp = [];
  let sum = 0;
  for (let i = 1; i <= index; i++) {
    temp.push(i);
    sum = sum + i;
    while (sum > target) {
      sum -= temp[0];
      temp.shift();
    }
    if (sum === target) {
      temp.length >= 2 && res.push([...temp]);
    }
  }
  return res;
};
```

或者这样

```js
var findContinuousSequence = function (target) {
  let list = [];
  let left = 1;
  let right = 1;
  let sum = 0;
  while (left < target / 2) {
    if (sum < target) {
      sum += right;
      right++;
    } else if (sum > target) {
      sum -= left;
      left++;
    } else {
      let arr = [];
      for (let i = left; i < right; i++) {
        arr.push(i);
      }
      list.push(arr);
      sum -= left;
      left++;
    }
  }
  return list;
};
```

## 使用递归

```js
var findContinuousSequence = function (target) {
  this.res = [];
  this.t = target;
  for (var i = 1; i <= Math.ceil(t / 2); i++) {
    backTrack(i, 0, []);
  }
  return res;
};

var backTrack = function (n, sum, item) {
  if (sum == this.t) {
    this.res.push(item);
    return;
  } else if (sum < this.t) {
    item.push(n);
    backTrack(n + 1, sum + n, item);
  }
};
```
