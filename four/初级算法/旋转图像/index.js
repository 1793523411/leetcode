/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    if (matrix.length == 0 || matrix.length !== matrix[0].length) {
        return;
    }
    let nums = matrix.length;
    //沿着对角线翻转
    for (let i = 0; i < nums; ++i) {
        for (let j = 0; j < nums - i; ++j) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[nums - 1 - j][nums - 1 - i]
            matrix[nums - 1 - j][nums - 1 - i] = tmp
        }
    }

    //沿着水平中线翻转
    for (let i = 0; i < (nums >> 1); ++i) {
        for (let j = 0; j < nums; ++j) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[nums - 1 - i][j];
            matrix[nums - 1 - i][j] = tmp
        }
    }
};

var rotate = function (matrix) {
    let pos1 = 0, pos2 = matrix.length - 1
    while (pos1 < pos2) {
        add = 0;
        while (add < pos2 - pos1) {
            tmp = matrix[pos2 - add][pos1];
            matrix[pos2 - add][pos1] = matrix[pos2][pos2 - add];
            matrix[pos2][pos2 - add] = matrix[pos1 + add][pos2];
            matrix[pos1 + add][pos2] = matrix[pos1][pos1 + add];
            matrix[pos1][pos1 + add] = tmp
            add = add + 1;
        }
        pos1 = pos1 + 1;
        pos2 = pos2 - 1
    }
};