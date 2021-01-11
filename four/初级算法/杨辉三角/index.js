/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 0) {
        return []
    } else {
        let arr = new Array(numRows)
        for (let i = 0; i < numRows; i++) {
            arr[i] = new Array(i + 1)
        }
        arr[0][0] = 1;
        for (let i = 1; i < numRows; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i - 1][j - 1] && arr[i - 1][j]) {
                    arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
                } else {
                    arr[i][j] = arr[i - 1][j - 1] ? arr[i - 1][j - 1] : arr[i - 1][j]
                }
            }
        }
        return arr
    }
};

var generate = function (numRows) {
    return Array(numRows).fill().map((_, i, r) => r[i] = Array(i + 1).fill(1).map((v, j) => j > 0 && j < i ? r[i - 1][j - 1] + r[i - 1][j] : v))
};

//对称性：从两端到中间，同时赋值j和i - j
//i从小到大分配数组类型：8 位无符号整数 → 16 位无符号整数 → 32 位无符号整数
var generate = function(numRows) {
    for(var i = 0, r = new Array(numRows); i < numRows; i++) {
        r[i] = i < 10 ? new Uint8Array(i + 1) : i < 19 ? new Uint16Array(i + 1) : new Uint32Array(i + 1)
        r[i][0] = r[i][i] = 1
        for (var j = 1; j <= i >> 1; j++) 
            r[i][j] = r[i][i - j] = r[i - 1][j - 1] + r[i - 1][j]
    }
    return r
};

// fill填充1代替赋值2次。类型数组改为数组，减少判断
var generate = function(numRows) {
    for(var i = 0, r = Array(numRows); i < numRows; i++) {
        r[i] = Array(i + 1).fill(1)
        for (var j = 1; j <= i >>> 1; j++) 
            r[i][j] = r[i][i - j] = r[i - 1][j - 1] + r[i - 1][j]
    }
    return r
};

//索引0和i共赋值2次1代替fill

var generate = function(numRows) {
    for(var i = 0, r = Array(numRows); i < numRows; i++) {
        r[i] = Array(i + 1)
        r[i][0] = r[i][i] = 1
        for (var j = 1; j <= i >>> 1; j++) 
            r[i][j] = r[i][i - j] = r[i - 1][j - 1] + r[i - 1][j]
    }
    return r
};


//使用两个指针处理对称
var generate = function(numRows) {
    if (!numRows) return []
    const res = [[1]]
    for (let i = 1; i < numRows; ++i) {
        res[i] = []
        for (let j = 0, end = i; j <= end; ++j, end --) {
            res[i][j] = res[i][end] = j === 0 ? 1 : Number(res[i-1][j-1]) + res[i-1][j]
        }
    }
    return res
};
