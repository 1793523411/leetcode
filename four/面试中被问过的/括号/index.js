/**
 * @param {number} n
 * @return {string[]}
 */

 //回溯，剪枝：右括号比左括号剩的多，才能选右括号
var generateParenthesis = function (n) {
    const res = []
    const dfs = (lRemain, rRemain, str) => {
        if (str.length == 2 * n) {
            res.push(str);
            return;
        }
        if (lRemain > 0) {
            dfs(lRemain - 1, rRemain, str + "(")
        }
        if (lRemain < rRemain) {
            dfs(lRemain, rRemain - 1, str + ")")
        }
    }
    dfs(n, n, "")
    return res
};