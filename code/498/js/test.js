/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    if(!matrix.length) return [];
    let l_row = matrix.length - 1;
    let l_col = matrix[0].length - 1;
    let row = 0, col = 0;
    let is_up = true;
    let fun = (res) => {
        res.push(matrix[row][col]);
        if(row == l_row && col == l_col){
            return res;
        }
        if(is_up){
            if(col < l_col && row > 0){
                col++;
                row--;
            }else{
                is_up = !is_up;
                col < l_col ? col++ : row++;
            }
        }else{
            if(col > 0 && row < l_row){
                col--;
                row++;
            }else{
                is_up = !is_up;
                row < l_row ? row++ : col++;
            }
        }
        return fun(res);
    }
    return fun([]);
};
