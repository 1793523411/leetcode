function bitSum(n) {
    let res = 0;
    while (n) {
        res = res + (n % 10);
        n = Math.floor(n / 10);
    }
    return res;
}

var movingCount = function(m, n, k) {
    let res = 0;
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];
    const visited = {};
    dfs(0, 0);
    return res;

    function dfs(x, y) {
        visited[`${x}-${y}`] = true;
        if (bitSum(x) + bitSum(y) > k) {
            return;
        }
        ++res;

        for (const direction of directions) {
            const newx = direction[0] + x;
            const newy = direction[1] + y;
            if (
                !visited[`${newx}-${newy}`] &&
                newx >= 0 &&
                newy >= 0 &&
                newx < m &&
                newy < n
            ) {
                dfs(newx, newy);
            }
        }
    }
};

var movingCount = function(m, n, k) {
    let res = 0;
    const directions = [
        [1, 0],
        [0, 1]
    ];
    const queue = [[0, 0]];
    const visited = {
        "0-0": true
    }; // 标记 (x,y) 是否被访问过

    while (queue.length) {
        const [x, y] = queue.shift();
        //  (x, y) 的数位之和不符合要求
        // 题目要求节点每次只能走1格，所以无法从当前坐标继续出发
        if (bitSum(x) + bitSum(y) > k) {
            continue;
        }
        ++res;

        for (const direction of directions) {
            const newx = direction[0] + x;
            const newy = direction[1] + y;
            if (
                !visited[`${newx}-${newy}`] &&
                newx >= 0 &&
                newy >= 0 &&
                newx < m &&
                newy < n
            ) {
                queue.push([newx, newy]);
                visited[`${newx}-${newy}`] = true;
            }
        }
    }

    return res;
};