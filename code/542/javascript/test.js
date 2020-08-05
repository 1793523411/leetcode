//单源BFS，太暴力了

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    if(!matrix.length || !matrix[0].length) return null;

    let n = matrix.length;
    let m = matrix[0].length;
    let ans = new Array(n);
    for(let i = 0; i < n; i++) ans[i] = new Array(m).fill(-1);

    for(let i = 0; i < n; i++)
        for(let j = 0; j < m; j++) {
            if(matrix[i][j] === 0) ans[i][j] = 0;
            else ans[i][j] = bfs(i, j);
        }

    return ans;

    function bfs(row, col) {
        let queue = [[row, col]];
        let visited = new Array(n);
        let dist = 0;
        for(let i = 0; i < n; i++) visited[i] = new Array(m).fill(false);
        visited[row][col] = true;
        while(queue.length) {
            let len = queue.length;
            dist++;
            for(let i = 0; i < len; i++) {
                let top = queue.shift(); 

                if(top[0] + 1 < n && !visited[top[0]+1][top[1]]) {
                    if(matrix[top[0]+1][top[1]] === 0) return dist;
                    queue.push([top[0]+1, top[1]]);
                    visited[top[0]+1][top[1]] = true;
                }
                if(top[0] - 1 >= 0 && !visited[top[0]-1][top[1]]) {
                    if(matrix[top[0]-1][top[1]] === 0) return dist;
                    queue.push([top[0]-1, top[1]]);
                    visited[top[0]-1][top[1]] = true;
                }
                if(top[1] + 1 < m && !visited[top[0]][top[1]+1]) {
                    if(matrix[top[0]][top[1]+1] === 0) return dist;
                    queue.push([top[0], top[1]+1]);
                    visited[top[0]][top[1]+1] = true;
                }
                if(top[1] - 1 >= 0 && !visited[top[0]][top[1]-1]) {
                    if(matrix[top[0]][top[1]-1] === 0) return dist;
                    queue.push([top[0], top[1]-1]);
                    visited[top[0]][top[1]-1] = true;
                }
            }
        }
    }
};

//多源BFS

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    if(!matrix.length || !matrix[0].length) return null;

    let n = matrix.length;
    let m = matrix[0].length;
    let ans = new Array(n);
    for(let i = 0; i < n; i++) ans[i] = new Array(m).fill(-1);

    let queue = [];
    for(let i = 0; i < n; i++)
        for(let j = 0; j < m; j++) {
            if(matrix[i][j] === 0) {
                ans[i][j] = 0;
                queue.push([i, j]);
            }
        }

    let dist = 0;
    while(queue.length) {
        let len = queue.length;
        dist++;
        for(let i = 0; i < len; i++) {
            let top = queue.shift();

            if(top[0] + 1 < n && ans[top[0]+1][top[1]] === -1) {
                queue.push([top[0]+1, top[1]]);
                ans[top[0]+1][top[1]] = dist;
            }
            if(top[0] - 1 >= 0 && ans[top[0]-1][top[1]] === -1) {
                queue.push([top[0]-1, top[1]]);
                ans[top[0]-1][top[1]] = dist;
            }
            if(top[1] + 1 < m && ans[top[0]][top[1]+1] === -1) {
                queue.push([top[0], top[1]+1]);
                ans[top[0]][top[1]+1] = dist;
            }
            if(top[1] - 1 >= 0 && ans[top[0]][top[1]-1] === -1) {
                queue.push([top[0], top[1]-1]);
                ans[top[0]][top[1]-1] = dist;
            }
        }
    }
    return ans;

};
