# 打印从1到最大的n位数

```
输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

示例 1:

输入: n = 1
输出: [1,2,3,4,5,6,7,8,9]
 

说明：

用返回一个整数列表来代替打印
n 为正整数
```

## 使用js的API

```js
var printNumbers = function(n) {
    let len = Math.pow(10, n)-1
    return Array.from({length: len}, (item, index) => index+1)
};
```

## 常规解法

```js
var printNumbers = function (n) {
    res = [];
    end = Math.pow(10, n) - 1;
    for (let i = 0; i < end; i++) {
        res[i] = i + 1;
    }
    return res;
}
```

## 使用位运算

```js
var printNumbers = function(n) {
    let base = 10, sum = 1, res = [];

    while (n != 0) {
        if ((n & 1) == 1) {
            // 如果当前二进制最后一位为1
            sum *= base;
        }
        n >>= 1;
        base *= base;
    }
    let i = 1;

    while (i < sum) {
        res.push(i++);
    }
    return res;
};
```