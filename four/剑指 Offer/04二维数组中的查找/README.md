# 二维数组中的查找

```
在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。


示例:

现有矩阵 matrix 如下：

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。

给定 target = 20，返回 false。

 

限制：

0 <= n <= 1000

0 <= m <= 1000
```

# 使用 js 的 api 一行解决

```js
var findNumberIn2DArray = function (matrix, target) {
  return matrix.flat(Infinity).includes(target);
};
```

## 消消乐

左下角的点大于 target，消掉最后一行，否则消掉第一列，直到右上角的点

```js
var findNumberIn2DArray = function (matrix, target) {
  let i = matrix.length - 1,
    j = 0;
  while (i >= 0 && j < matrix[0].length) {
    if (matrix[i][j] === target) return true;
    matrix[i][j] > target ? i-- : j++;
  }
  return false;
};
```

从矩阵左下方第一个元素判断，如果此行第一个元素大于目标元素（这一行后面的肯定都大于目标元素），进入下次循环，循环内部用includes查找是否含有目标元素，找到后，手动结束外层循环（无需执行多余的循环内容了）

```js
var findNumberIn2DArray = function (matrix, target) {
  let flag = false;
  for (let i = matrix.length; i > 0; i--) {
    if (matrix[i - 1][0] <= target) {
      if (matrix[i - 1].includes(target)) {
        flag = true;
        i = -1;
      }
    }
  }
  return flag;
};
```

以矩阵的右上角为观察点，整个矩阵构成一颗二叉查找树(就很妙~~)

```js
var findNumberIn2DArray = function(matrix, target) {
    if (!matrix.length) {
        return false;
    }
    let row = 0, col = matrix[0].length - 1;
    while (row <= matrix.length - 1 && col >= 0) {
        const value = matrix[row][col];
        if (value == target) {
            return true;
        } else if (value > target) {
            --col;
        } else {
            ++row;
        }
    }
    return false;
};
```

## 二分查找

```js
var findNumberIn2DArray = function (matrix, target) {
  if (matrix.length == 0 || matrix[0].length == 0) {
    return false;
  }
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] > target) {
      break;
    }
    if (matrix[i][matrix[i].length - 1] < target) {
      continue;
    }
    let col = binarySearch(matrix[i], target);
    if (col != -1) {
      return true;
    }
  }
  return false;
};

//边界值的判断
var binarySearch = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = (start + end) >>> 1;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};
```

## 暴力解法

```js
var findNumberIn2DArray = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }
  return false;
};
```
