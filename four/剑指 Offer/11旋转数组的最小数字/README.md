# 旋转数组的最小数字

```
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

示例 1：

输入：[3,4,5,1,2]
输出：1
示例 2：

输入：[2,2,2,0,1]
输出：0
```

## 直接上 Math😆

```js
var minArray = function (numbers) {
  return Math.min(...numbers);
};
```

## 直接上排序😄

```js
var minArray = function(numbers) {
    numbers.sort((a,b)=>{
        return a-b;
    })
    return numbers[0]
};
```

## 二分查找 

找两个单增区间的边界

旋转后的数组可以划分为两个有序的子区间，前面区间的元素都大于等于后面的元素，我们要找的是两个子区间的分界，很自然想到二分查找

`nums[mid] > nums[right]` : 最小元素肯定在mid的右边，所以 left = mid + 1

`nums[mid] == nums[right]`: 此时 mid 可能处于左边区间，也可能处于右边区间，即最小元素不确定在它的左边还是右边,所以 right-- ，换一个 `nums[right]` 再试`nums[mid] < nums[right]`

此时 mid 肯定处在右边的增区间，所以 right = mid


```js
const minArray = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = left + right >>> 1;
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else if (nums[mid] == nums[right]) {
      right--;
    } else {
      right = mid;
    }
  }
  return nums[left];
};
```

## 常规解法

原数组递增排列，那么该数组的所有片段都是递增排列，第一个不符合递增排列的元素就是旋转截断点，也就是最小值点。如果没有，就返回第一个元素

```js
var minArray = function(numbers) {
    for(var i =0;i<numbers.length;i++){
        if(numbers[i]<numbers[0]) return numbers[i];
    }
    return numbers[0];
};
```