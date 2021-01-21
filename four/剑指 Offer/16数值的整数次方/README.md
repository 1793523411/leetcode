```
实现函数double Power(double base, int exponent)，求base的exponent次方。不得使用库函数，同时不需要考虑大数问题。

 

示例 1:

输入: 2.00000, 10
输出: 1024.00000
示例 2:

输入: 2.10000, 3
输出: 9.26100
示例 3:

输入: 2.00000, -2
输出: 0.25000
解释: 2-2 = 1/22 = 1/4 = 0.25
 

说明:

-100.0 < x < 100.0
n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。
```

## 二分递归

假设指数 exponent 是正数。那么递归式如下：

如果`exponent`是偶数，`Power(base, exponent) = Power(base, exponent / 2) * Power(base, exponent / 2)`
如果`exponent`是奇数，`Power(base, exponent) = base * Power(base, exponent / 2) * Power(base, exponent / 2)`
对于负指数 exponent 的情况，取其绝对值先计算。将最后结果取倒数即可。

时间复杂度是 `O(logN)`；由于采用递归结构，空间复杂度是 `O(logN)`。

```js
var myPow = function (x, n) {
  const isNegative = n < 0; // 是否是负指数
  const result = absMyPow(x, Math.abs(n));
  return isNegative ? 1 / result : result;
};

function absMyPow(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  if (exponent === 1) {
    return base;
  }

  const subResult = absMyPow(base, Math.floor(exponent / 2));
  return exponent % 2 ? subResult * subResult * base : subResult * subResult;
}
```

## 直接内置函数

```js
var myPow = function (x, n) {
  return Math.pow(x, n);
};
```
