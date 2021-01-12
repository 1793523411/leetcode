/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// o(m+n)的空间
var setZeroes = function (matrix) {
    let h = [new Set(), new Set()]
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                h[0].add(i);
                h[1].add(j)
            }
        }
    }
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
            if (h[0].has(i) || h[1].has(j)) matrix[i][j] = 0;
        }
    }
};

//o(1)的空间
var setZeroes = function (matrix) {
    const row = matrix.length;
    const col = matrix[0].length;
    let row0 = false;
    let col0 = false;
    for (let i = 0; i < row; i++) {
        if (matrix[i][0] == 0) {
            col0 = true;
            break
        }
    }
    for (let i = 0; i < col; i++) {
        if (matrix[0][i] == 0) {
            row0 = true;
            break
        }
    }
    //将第一行和第一列作为标志位
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = matrix[0][j] = 0
            }
        }
    }
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }
    if (row0) {
        for (let j = 0; j < col; j++) {
            matrix[0][j] = 0
        }
    }
    if (col0) {
        for (let i = 0; i < row; i++) {
            matrix[i][0] = 0;
        }
    }
};