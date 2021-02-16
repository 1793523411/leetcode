# 不用加减乘除做加法

```
写一个函数，求两个整数之和，要求在函数体内不得使用 “+”、“-”、“*”、“/” 四则运算符号。

 

示例:

输入: a = 1, b = 1
输出: 2
 

提示：

a, b 均可能是负数或 0
结果不会溢出 32 位整数
```

## 我就用

```js
var add = function (a, b) {
  return a + b;
};
```

## 位运算

计算 a+b，等价于(a^b)+((a&b)<<1)。

```
通过二进制    举例3+7=10
3[011] + 7[111]
正常情况
      0011    3
    + 0111    7
    = 1010    10

异或     a =  4[0100](3^7)  b=6[0110](3&7>>1)
重复     a =  2[0010](4^6)  b=8[1000](4&6>>1)
重复     a = 10[1010](2^8)  b=0[0000](2&8>>1 )

```

**迭代**

```js
var add = function (a, b) {
  while (b != 0) {
    [a, b] = [a ^ b, (a & b) << 1];
  }
  return a;
};
```

**递归**

```js
var add = function (a, b) {
  if (a == 0) return b;
  if (b == 0) return a;
  return add(a ^ b, (a & b) << 1);
};
```

## 符合题意的解法

```js
var add = function (a, b) {
  return (function (a, b) {
    if (a == 0 || b == 0) {
      return a || b;
    }

    function negative(num) {
      //将正数变为负数
      return Number([[].indexOf("wth").toString()[0], num].join(""));
    }

    function abs(num) {
      //取绝对值
      return num >= 0 ? num : Number(num.toString().slice(1));
    }

    if (a > 0 && b > 0) {
      //正数相加
      return Array(abs(a)).concat(Array(abs(b))).length;
    }
    if (a < 0 && b < 0) {
      //负数相加
      return negative(Array(abs(a)).concat(Array(abs(b))).length);
    }
    if (a > b) {
      if (abs(a) > abs(b)) {
        //大正数+小负数
        let t = Array(a);
        t.splice(b);
        return t.length;
      } else if (abs(a) < abs(b)) {
        //小正数+大负数，即大负数绝对值-小正数取反
        let t = Array(abs(b));
        let tmp = t.splice(a);
        return negative(tmp.length);
      }
    } else {
      //提示：在严格模式下无法在匿名函数内调用自身
      return arguments.callee(b, a);
    }
  })(a, b);
};
```
