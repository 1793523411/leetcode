/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const rows = [], columns = [], boxes = []
    for (let i = 0; i < 9; i++) {
        rows[i] = [];
        columns[i] = [];
        boxes[i] = [];
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const value = board[i][j]
            if (value !== '.') {
                if (!rows[i].includes(value)) {
                    rows[i].push(value)
                } else {
                    return false
                }

                if (!columns[j].includes(value)) {
                    columns[j].push(value)
                } else {
                    return false
                }

                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
                if (!boxes[boxIndex].includes(value)) {
                    boxes[boxIndex].push(value)
                } else {
                    return false
                }
            }
        }
    }
    return true
};

//上面那种写法另一个版本 思路一模一样
var isValidSudoku = function (board) {
    let rows = {};
    let columns = {};
    let boxes = {};
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];
            if (num != '.') {
                let boxIndex = parseInt((i / 3)) * 3 + parseInt(j / 3);
                if (rows[i + '-' + num] || columns[j + '-' + num] || boxes[boxIndex + '-' + num]) {
                    return false
                }
                rows[i + '-' + num] = true;
                columns[j + '-' + num] = true;
                boxes[boxIndex + '-' + num] = true;
            }
        }
    }
    return true
}