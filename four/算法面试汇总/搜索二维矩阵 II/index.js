/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//暴力解法
var searchMatrix = function (matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === target) {
                return true
            }
        }
    }
    return false
};

//消消乐，左下角的点大于target，消掉最后一行，否则消掉第一列，直到右上角的点
var searchMatrix = function (matrix, target) {
    let i = matrix.length - 1, j = 0;
    while (i >= 0 && j < matrix[0].length) {
        if (matrix[i][j] === target) return true;
        matrix[i][j] > target ? i-- : j++
    }
    return false
};

//二分查找
var searchMatrix = function (matrix, target) {
    if (matrix.length == 0 || matrix[0].length == 0) {
        return false
    }
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] > target) {
            break
        }
        if (matrix[i][matrix[i].length - 1] < target) {
            continue
        }
        let col = binarySearch(matrix[i], target);
        if (col != -1) {
            return true
        }
    }
    return false
};

//边界值的判断
var binarySearch = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = (start + end) >>> 1;
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return -1
}