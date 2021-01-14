/**
 * @param {string} s
 * @return {string}
 */

/**
* @param {string} s
* @return {string}
*/
var longestPalindrome = function (s) {
    function isPalindrome(str) {
        var len = str.length
        var middle = parseInt(len / 2)
        for (var i = 0; i < middle; i++) {
            if (str[i] != str[len - i - 1]) {
                return false
            }
        }
        return true
    }
    var ans = '';
    var max = 0;
    var len = s.length
    for (var i = 0; i < len; i++) {
        for (var r = i + 1; r <= len; r++) {
            var tmpStr = s.substring(i, r)
            if (isPalindrome(tmpStr) && tmpStr.length > max) {
                ans = s.substring(i, r)
                max = tmpStr.length;
            }
        }
    }
    return ans;
};



// 状态定义
// dp[i,j]：字符串s从索引i到j的子串是否是回文串
// true： s[i,j] 是回文串
// false：s[i,j] 不是回文串
// 转移方程
// dp[i][j] = dp[i+1][j-1] && s[i] == s[j]
// s[i] == s[j]：说明当前中心可以继续扩张，进而有可能扩大回文串的长度
// dp[i+1][j-1]：true
// 说明s[i,j]的**子串s[i+1][j-1]**也是回文串
// 说明，i是从最大值开始遍历的，j是从最小值开始遍历的
// 特殊情况
// j - i < 2：意即子串是一个长度为0或1的回文串
// 总结
// dp[i][j] = s[i] == s[j] && ( dp[i+1][j-1] || j - i < 2)

//动态规划
var longestPalindrome = function (s) {
    let n = s.length;
    let res = '';
    let dp = Array.from(new Array(n), () => new Array(n).fill(0));
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]);
            if (dp[i][j] && j - i + 1 > res.length) {
                res = s.substring(i, j + 1);
            }
        }
    }
    return res;
};

//中心扩展法

var longestPalindrome = function(s) {
    if(!s || s.length < 2){
        return s;
    }
    let start = 0,end = 0;
    let n = s.length;
    // 中心扩展法
    let centerExpend = (left,right) => {
        while(left >= 0 && right < n && s[left] == s[right]){
            left--;
            right++;
        }
        return right - left - 1;
    }
    for(let i = 0;i < n;i++){
        let len1 = centerExpend(i,i);
        let len2 = centerExpend(i,i+1);
        // 两种组合取最大回文串的长度
        let maxLen = Math.max(len1,len2);
        if(maxLen > end - start){
            // 更新最大回文串的首尾字符索引
            start = i - ((maxLen - 1) >> 1);
            end = i + (maxLen >> 1);
        }
    }
    return s.substring(start,end+1);
};
