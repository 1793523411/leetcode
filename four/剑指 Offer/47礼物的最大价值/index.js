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

    return dp[i - 1][j - 1]
};

var maxValue = function (grid) {
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