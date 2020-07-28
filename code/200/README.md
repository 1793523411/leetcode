使用BFS就用队列

使用DFS就是用递归回溯

--------------------

BFS中可以使用一个marked数组来标志是否走过了该位置，也可以不适用额外的数组，直接将走过的地方值为0

BFS中移动方位，可以在循环中上下左右一个一个判断

```javascript
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
```

也可以

```go
for m:=0; m<4; m++{
    tmp_i := i + dx[m]
    tmp_j := j + dy[m]
    
    if 0<=tmp_i && tmp_i<row && 0<=tmp_j && tmp_j<col && grid[tmp_i][tmp_j] == '1'{
        grid[tmp_i][tmp_j] = '0'
        queue = append(queue, tmp_i, tmp_j)
    }
}

```