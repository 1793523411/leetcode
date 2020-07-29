/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let queue = [n];
    let visited = {};
    let level = 0;
    while(queue.length > 0) {
        // 层序遍历
        level++;
        let len = queue.length;
        for(let i = 0;i < len;i++){
            let cur = queue.pop();
            for(let j = 1;j*j <= cur;j++){
                let tmp = cur - j*j;
                // 找到答案
                if(tmp === 0) {
                    return level;
                }
                if(!visited[tmp]){
                    queue.unshift(tmp);               
                    visited[tmp] = true;
                }
            }
        }
    }
    return level;
};

console.log(numSquares(12))