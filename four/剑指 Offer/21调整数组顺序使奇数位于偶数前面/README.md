# 调整数组顺序使奇数位于偶数前面

```
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

 

示例：

输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。
 

提示：

1 <= nums.length <= 50000
1 <= nums[i] <= 10000
```

## js排序

```js
var exchange = function (nums) {
    return nums.sort((a, b) => b % 2 - a % 2)
};
```

## 拆分合并

```js
var exchange = function (nums) {
    let temp = [];
    let temp2 = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            temp.push(nums[i]);
        } else {
            temp2.push(nums[i]);
        }
    }
    return temp2.concat(temp);
};
```

## 双指针

```js
var exchange = function (nums) {
    var i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] % 2 !== 0) {
            // var tmp=nums[j];
            // nums[j]=nums[i];
            // nums[i]=tmp;
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++;
        }
    }
    return nums;
};
```