/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    return s.reverse()
};

var reverseString = function (s) {
    for (let i = 0, j = s.length-1; i < j; ++i, --j) {
        let c = s[i];
        s[i] = s[j]
        s[j] = c
    }
};