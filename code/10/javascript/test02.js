var isMatch = function(s, p) {
    return new RegExp('^' + p + '$').test(s)
};
//哈哈哈，投机取巧
// 执行用时：128 ms, 在所有 JavaScript 提交中击败了32.44% 的用户
// 内存消耗：39.6 MB, 在所有 JavaScript 提交中击败了14.29% 的用户
console.log(isMatch("mississippi", `mis*is*p*.`))
console.log(isMatch("aa", "a*"))