# 丑数

```
我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。

 

示例:

输入: n = 10
输出: 12
解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
说明:  

1 是丑数。
n 不超过1690。
```

## 动态规划

```js
var nthUglyNumber = function(n) {
    const res = new Array(n);
    res[0] = 1;

    let ptr2 = 0, // 下个数字永远 * 2
        ptr3 = 0, // 下个数字永远 * 3
        ptr5 = 0; // 下个数字永远 * 5

    for (let i = 1; i < n; ++i) {
        res[i] = Math.min(res[ptr2] * 2, res[ptr3] * 3, res[ptr5] * 5);
        // 说明前ptr2个丑数*2也不可能产生比i更大的丑数了
        // 所以移动ptr2
        if (res[i] === res[ptr2] * 2) {
            ++ptr2;
        }
        if (res[i] === res[ptr3] * 3) {
            ++ptr3;
        }
        if (res[i] === res[ptr5] * 5) {
            ++ptr5;
        }
    }

    return res[n - 1];
};
```

或者这样写

```js
var nthUglyNumber = function(n) {
    if(n == 1) {return 1}
    let a = 0, b = 0, c = 0
    let temp = [1]
    for(let i = 1; i < n; i++){
        temp[i] = Math.min(temp[a] * 2, temp[b] * 3, temp[c] * 5)
        temp[i] >= temp[a] * 2 ? a++ : 0
        temp[i] >= temp[b] * 3 ? b++ : 0
        temp[i] >= temp[c] * 5 ? c++ : 0
    }
    return temp[temp.length - 1]
};
```