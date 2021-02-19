# 礼物的最大价值

```
在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

 

示例 1:

输入: 
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物
 

提示：

0 < grid.length <= 200
0 < grid[0].length <= 200
```

## 动态规划

声明状态数组dp是一个 m*n 的二维数组。`dp[i][j]`的默认值是 0，它的含义是：在坐标点（i，j）处，能得到的最大价值礼物。所以，整个棋盘的最大价值礼物就是 `dp[m-1][n-1]` 的值。

现在来看状态转移的过程：

出发点是左上角，且只能向右/下移动，所以第一列和第一行中的 dp 值，就等于：当前礼物价值+上一个 dp 值
对于一般坐标（i，j），`dp[i][j] = grid[i][j] + max(dp[i - 1][j], dp[i][j - 1])`

```js
var maxValue = function(grid) {
    const rowNum = grid.length;
    const colNum = grid[0].length;
    const dp = [];
    for (let i = 0; i < rowNum; ++i) {
        dp[i] = [];
        for (let j = 0; j < colNum; ++j) {
            dp[i][j] = 0;
        }
    }

    dp[0][0] = grid[0][0];
    for (let i = 1; i < rowNum; ++i) {
        dp[i][0] = grid[i][0] + dp[i - 1][0];
    }

    for (let j = 1; j < colNum; ++j) {
        dp[0][j] = grid[0][j] + dp[0][j - 1];
    }

    for (let i = 1; i < rowNum; ++i) {
        for (let j = 1; j < colNum; ++j) {
            dp[i][j] = grid[i][j] + Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    return dp[rowNum - 1][colNum - 1];
};
```

或者这样写(由于上面那种写法)

我们只能向右走或者向下走，也就是说，每个位置的最优解是由它的上一位或者左一位决定的。
那么也就是 `dp[i][j] = max( dp[i-1][j], dp[i][j-1] ) + gird[i][j]`
我们按照状态方程，写代码，就可以得出答案了。

```js
var maxValue = function (grid) {
    var dp = new Array(grid.length)

    for (var i = 0; i < grid.length; i++) {
        dp[i] = new Array(grid[i].length).fill(0)
    }

    for (var i = 0; i < dp.length; i++) {
        for (var j = 0; j < dp[i].length; j++) {
            if (i - 1 >= 0) dp[i][j] = dp[i - 1][j]
            if (j - 1 >= 0) dp[i][j] = dp[i][j] > dp[i][j - 1] ? dp[i][j] : dp[i][j - 1]
            dp[i][j] += grid[i][j]
        }
    }
    
    return dp[i-1][j-1]
};
```

## 递归超时

```js
var maxValue = function(grid) {
    let rows = grid.length
    if (!rows) return 0
    let cols = grid[0].length
    return recurse(0, 0)

    function recurse(i, j) {
        if (i >= rows || j >= cols) return 0

        return grid[i][j] + Math.max(recurse(i, j+1), recurse(i+1, j))
    }
};
```

## 递归+缓存

```js
var maxValue = function(grid) {
    let rows = grid.length
    if (!rows) return 0
    let cols = grid[0].length
    let max = 0
    let map = new Map()
    return recurse(0, 0)

    function recurse(i, j) {
        if (i >= rows || j >= cols) return 0
        if (map.has(i*cols+j)) return map.get(i*cols+j)

        let a = recurse(i+1, j)
        let b = recurse(i, j+1)
        let max = grid[i][j] + Math.max(a, b)
        map.set(i*cols+j, max)

        return max
    }
};
```

## 二维DP

```js
var maxValue = function(grid) {
    let rows = grid.length
    if (!rows) return 0
    let cols = grid[0].length
    let dp = Array(rows).fill(0).map(i => Array(cols).fill(0))

    for(let i = rows-1; i>=0; i--) {
        for(let j = cols-1; j>=0; j--) {
            let a = i+1 >= rows ? 0 : dp[i+1][j]
            let b = j+1 >= cols ? 0 : dp[i][j+1]

            dp[i][j] = grid[i][j] + Math.max(a, b)
        }
    }

    return dp[0][0]
};
```

## 一维DP

```js
var maxValue = function(grid) {
    let rows = grid.length
    if (!rows) return 0
    let cols = grid[0].length
    let dp = Array(cols).fill(0)
    for(let i = rows-1; i>=0; i--) {
        for(let j = cols-1; j>=0; j--) {
            let a = i+1 >= rows ? 0 : dp[j]
            let b = j+1 >= cols ? 0 : dp[j+1]

            dp[j] = grid[i][j] + Math.max(a, b)
        }
    }
    return dp[0]
};
```