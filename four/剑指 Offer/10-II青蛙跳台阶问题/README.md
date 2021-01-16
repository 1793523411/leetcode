# 青蛙跳台阶问题

```
一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

示例 1：

输入：n = 2
输出：2
示例 2：

输入：n = 7
输出：21
示例 3：

输入：n = 0
输出：1
提示：

0 <= n <= 100
```

## 动态规划

f(n) = f(n-1)+f(n-2); n>2

f(n) = 2; n=2;

f(n) = 1; 0<=n<=1

于是

```js
var numWays = function (n) {
  if (n <= 1) return 1;
  if (n === 2) return 2;
  return (numWays(n - 1) + numWays(n - 2)) % 1000000007;
};
```

直接超时

因为涉及到重复子问题的递归计算很耗费时间,所以新建一个数组用于保存计算过的递归式的值,下次再遇到的时候直接查询值而不是递归计算

```js
var numWays = function (n) {
  let cache = new Array(n + 1).fill(-1); ///备忘录
  count(n, cache); // 填充备忘录
  return cache[n];
};

function count(n, cache) {
  if (n <= 1) cache[n] = 1;
  if (n === 2) cache[n] = 2;
  if (cache[n] !== -1) return cache[n];
  else cache[n] = (count(n - 1, cache) + count(n - 2, cache)) % 1000000007;
  return cache[n];
}
```

同样创建一个备忘录数组,不过此次填充的顺序是由小到大填充,略过递归计算填充带来的性能消耗

```js
var numWays = function (n) {
  let cache = new Array(n + 1).fill(-1);
  cache[0] = cache[1] = 1;
  cache[2] = 2;
  for (let i = 3; i <= n; i++) {
    cache[i] = (cache[i - 1] + cache[i - 2]) % 1000000007;
  }
  return cache[n];
};
```

状态压缩

```js
var numWays = function (n) {
  if (!n || n === 1) return 1;
  let a = 1; //临时保存n-2的值
  let b = 2; //临时保存n-1的值
  let result = n === 2 ? 2 : 0;
  for (let i = 3; i <= n; i++) {
    result = (a + b) % 1000000007;
    a = b;
    b = result;
  }
  return result;
};
```

## 尾递归

```js
var numWays = function (n) {
    const helper = (x, i = 1, j = 1) => {
        if (x <= 1) {
            return j;
        }
        return helper(x-1,j,(i+j)%1000000007);
    }
    return helper(n);
};
```