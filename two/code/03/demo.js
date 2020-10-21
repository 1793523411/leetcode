/**
 * @param {string} s
 * @return {number}
 */
//这种解法当s=bbbbb时为0
// var lengthOfLongestSubstring = function(s) {
//     let i = 0, j, k, max = 0;
//             for (j = 0; j < s.length; j++) {
//                 for (k = i; k < j; k++) {
//                     if (s[k] == s[j]) {
//                         i = k + 1;
//                         break;
//                     }
//                 }
//                 if (j - i - 1 > max)
//                     max = j - i + 1;
//             }
//             return max;
//     };

var lengthOfLongestSubstring = function(s){
    var last = []
    for(let i = 0;i<128;i++){
        last[i] = -1
    }
    var res = 0;
    var start = 0
    for(let i = 0;i<s.length;i++){
        //返回字符的下标
        let index = s.indexOf(s[i])
        // console.log(index)
        start = Math.max(start,last[index] + 1)
        console.log(start)
        res = Math.max(res,i-start+1)
        last[index] = i
    }
    return res
}
    
console.log(lengthOfLongestSubstring('abcabcbb'))
// console.log(lengthOfLongestSubstring('bbbbb'))