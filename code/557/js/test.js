/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(" ")
    .map((val) => val.split("").reverse().join(""))
    .join(" ");
};
