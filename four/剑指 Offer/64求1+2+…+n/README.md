# 求 1+2+…+n

```
求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

 

示例 1：

输入: n = 3
输出: 6
示例 2：

输入: n = 9
输出: 45
 

限制：

1 <= n <= 10000
```

## 调用 API

reduce()，数组索引相加

reduce 本质上还是循环，严格来说不符合题意

```js
var sumNums = function (n) {
  return new Array(n).fill(0).reduce((sum, v, i) => sum + i, n);
};
```

## 位运算+求和公式

```js
var sumNums = function (n) {
  return (n ** 2 + n) >> 1;
};
```

## `&&`运算符递归

```js
var sumNums = function (n) {
  return n && sumNums(n - 1) + n;
};
```

## 运用对数，将乘法变为加法，除法变成减法

```js
var sumNums = function (n) {
  return Math.round(Math.exp(Math.log(n) + Math.log(n + 1) - Math.log(2)));
};
```
