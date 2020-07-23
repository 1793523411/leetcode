/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  let tmp = parseInt(str);
  tmp = tmp ? tmp : 0;
  if (tmp > 2147483647) return 2147483647;
  if (tmp < -2147483648) return -2147483648;
  return tmp;
};

console.log(myAtoi("-42"));
console.log(myAtoi("42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));

// 执行用时：108 ms, 在所有 JavaScript 提交中击败了22.76% 的用户
// 内存消耗：39.2 MB, 在所有 JavaScript 提交中击败了12.50% 的用户