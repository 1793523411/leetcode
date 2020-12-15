/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 0) {
        return ""
    }
    let ans = strs[0];
    for (let i = 0; i < strs.length; i++) {
        let j = 0;
        for (; j < ans.length && j < strs[i].length; j++) {
            if (ans[j] != strs[i][j]) {
                break;
            }
        }
        ans = ans.substr(0, j)
        if (ans === "") {
            return ans;
        }
    }
    return ans
};

//比较大小
var longestCommonPrefix = function (strs) {
    if (strs.length == []) {
        return ""
    } else {
        let res = "";
        let max = strs[0]
        let min = strs[0]
        for (let i = 0; i < strs.length; i++) {
            min = min > strs[i + 1] ? strs[i + 1] : min
            max = max < strs[i + 1] ? strs[i + 1] : max
        }
        for (let j = 0; j < max.length; j++) {
            if (max[j] == min[j]) {
                res = res + max[j]
            } else {
                break
            }
        }
        return res
    }
};