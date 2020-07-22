/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  /**
   * 数字转成字符串
   * 获取符号位
   * 翻转非符号位
   * 拼接
   */
  //!假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
  let str = x.toString();
  let ch = str[0] === "-" ? "-" : "";
  let str2 = str[0] === "-" ? str.substring(1) : str;
  let res = ch + str2.split("").reverse().join("");
  res = parseInt(res);
    console.log(res);
  if (res > 2147483647) return 0;
  if (res < -2147483648) return 0;
  return res;
};

console.log(reverse(123));
