/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const n = s.length
    if (n === 0) return []
    const res = [], dp = Array.from({ length: n }, () => Array(n).fill(0))
    for(let i = n - 1; i >= 0; i--) { // 动规
        for (let j = i; j < n; j++) {
            dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i+1][j-1])
        }
    }
    function bt(path, start) { // 回溯
        if (start === n) res.push([...path])
        for(let i = start; i < n; i++) {
            if (!dp[start][i]) continue
            path.push(s.substring(start, i + 1))
            bt(path, i + 1)
            path.pop()
        }
    }
    bt([], 0)
    return res
};