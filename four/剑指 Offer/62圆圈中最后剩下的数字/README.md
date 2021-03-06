# 圆圈中最后剩下的数字

```
0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。求出这个圆圈里剩下的最后一个数字。

例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

 

示例 1：

输入: n = 5, m = 3
输出: 3
示例 2：

输入: n = 10, m = 17
输出: 2
 

限制：

1 <= n <= 10^5
1 <= m <= 10^6
```

## 找规律

大体思路：

- n 个人编号 0,1,2,...,n-1，每数 m 次删掉一个人
- 假设有函数 f(n)表示 n 个人最终剩下人的编号
- n 个人删掉 1 个人后可以看做 n-1 的状态，不过有自己的编号。
- n 个人删掉的第一个人的编号是(m-1)%n，那么 n 个人时删掉第一个人的后面那个人(m-1+1)%n 一定是 n-1 个人时候编号为 0 的那个人，即 n 个人时的编号 m%n（这个编号是对于 n 个人来考虑的），n-1 个人时编号为 i 的人 n 个人时(m+i)%n
- 所以 f(n)=(m+f(n-1))%n
- f(1)=0，因为 1 个人时只有一个编号 0。

```js
var lastRemaining = function (n, m) {
  let ans = 0;
  for (let i = 2; i <= n; i++) {
    ans = (ans + m) % i;
  }
  return ans;
};
```

## 暴力解

`几秒前	通过	3936 ms	51.5 MB	JavaScript`

```js
var lastRemaining = function(n, m) {
    const arr = [];
    for(let i = 0; i < n; i++) arr.push(i);
    let head = 0;
    while(arr.length > 1) {
        head = (head + m - 1) % arr.length;
        arr.splice(head, 1);
    }
    return arr[0];
};
```