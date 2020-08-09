//感觉有点像增广矩阵,但是不太符合题意，占了额外的空间
var rotate = function(matrix) {
    const length = matrix.length;
    for(let i = length-1;i>=0;i--){
        for(let j = 0;j<length;j++){
            matrix[j].push(matrix[i][j])
        }
    }
    for(let i = 0;i<length;i++){
        matrix[i].splice(0,length)
    }
}
