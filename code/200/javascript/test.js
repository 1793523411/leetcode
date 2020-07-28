/**
 * @param {character[][]} grid
 * @return {number}
 */

 //错的错的错的，重要的事情说三遍
var numIslands = function(grid) {
    let directions = [[-1,0],[0,-1],[1,0],[0,1]]
    let rows = grid.length
    if(rows == 0){
        return 0
    }
    let clos = grid[0].length
    let marked = [...new Array(rows).keys()]
    for(let i=0;i<rows;i++)
        for(let j = 0;j<clos;j++)
            marked[i][j] = 0
    let count = 0
    for(let i = 0;i<rows;i++){
        for(let j = 0;j<clos;j++){
            if(!marked[i][j] && grid[i][j] == '1'){
                count++
                let queue = new Array()
                queue.push(i*clos+j)
                marked[i][j] = true
                while(queue.length){
                    let cur = queue.shift()
                    let curX = cur/clos
                    let curY = cur%clos
                    for(let k = 0;k<4;k++){
                        let newX = curX + directions[k][0]
                        let newY = curY + directions[k][1]
                        if(inArea(newX,newY,rows,clos)&&grid[newX][newY] == '1' && !marked[newX][newY]){
                            queue.push(newX*clos+newY)
                            marked[newX][newY] = 1
                        }
                    }
                }
            }
        }
    }
    return count
};

function inArea(x,y,rows,clos){
    return x >= 0 && x<rows && y>=0 && y< clos
}

console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]))