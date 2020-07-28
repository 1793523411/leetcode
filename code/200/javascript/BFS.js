var numIslands = function (grid) {
  if (grid.length < 1) return 0;
  let m = grid.length;
  let n = grid[0].length;
  let islands = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        islands++;
        grid[i][j] = 0; // 把查找过的项变成0 防止重新查找
        let queue = [];
        queue.push([i, j]); // 把当前点加入队列
        while (queue.length > 0) {
          // 当队列不为空时, 继续循环
          let cur = queue.shift(); // 拿出队列第一项
          let x = cur[0],
            y = cur[1];
          // 上下左右检查
          if (x - 1 >= 0 && grid[x - 1][y] == 1) {
            // 上
            queue.push([x - 1, y]);
            grid[x - 1][y] = 0;
          }
          if (x + 1 < m && grid[x + 1][y] == 1) {
            // 下
            queue.push([x + 1, y]);
            grid[x + 1][y] = 0;
          }
          if (y - 1 >= 0 && grid[x][y - 1] == 1) {
            // 左
            queue.push([x, y - 1]);
            grid[x][y - 1] = 0;
          }
          if (y + 1 < n && grid[x][y + 1] == 1) {
            // 右
            queue.push([x, y + 1]);
            grid[x][y + 1] = 0;
          }
        }
      }
    }
  }
  return islands;
};
