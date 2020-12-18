/**
 * @param {number[]} arr
 * @return {number[]}
 */
//暴力解法
var replaceElements = function (arr) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            ans.push(-1)
        } else {
            ans.push(Math.max(...arr.slice(i + 1)))
        }
    }
    return ans
}

//从右往左，通过比较max和当前值来更新max即可
var replaceElements = function (arr) {
    let max = -1, res = []
    for (let i = arr.length - 1; i >= 0; i--) {
        res[i] = max;
        max = arr[i] > max ? arr[i] : max
    }
    return res
}