# 构建乘积数组

```
给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B[i] 的值是数组 A 中除了下标 i 以外的元素的积, 即 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。

 

示例:

输入: [1,2,3,4,5]
输出: [120,60,40,30,24]
 

提示：

所有元素乘积之和不会溢出 32 位整数
a.length <= 100000
```

## 双向遍历

left 从左往右遍历，逐个求出从索引 0 对应值一直乘到 到当前索引的乘积结果；
right 从右往左遍历，逐个求出从最后一个值乘到当前值得乘积结果。

然后 结果就是`b[i] = left[i-1] *right[i+1];`

```js
var constructArr = function (a) {
  let left = [];
  let right = [];
  let len = a.length;
  for (let i = 0; i < len; i++) {
    let j = len - i - 1;
    if (i == 0) {
      left[i] = a[i];
      right[j] = a[j];
    } else {
      left[i] = left[i - 1] * a[i];
      right[j] = right[j + 1] * a[j];
    }
  }

  let b = [];
  for (let i = 0; i < len; i++) {
    if (i === 0) b[i] = right[i + 1];
    else if (i === len - 1) b[i] = left[i - 1];
    else b[i] = left[i - 1] * right[i + 1];
  }
  return b;
};
```

## 暴力

```js
var constructArr = function (a) {
  let b = [];
  let pre = 1;
  a.forEach((v, i) => {
    let j = i + 1;
    let muti = 1;
    while (j < a.length) {
      muti *= a[j];
      j++;
    }

    b.push(pre * muti);
    pre *= a[i];
  });

  return b;
};
```
