/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

 //二分查找：从 numbers 取出一个元素 numbers[i]，在 numbers 中 i 之后的元素中查找 target - numbers[i]，查找到之间返回，不然依次从 numbers 中取后面一个元素
var twoSum = function (numbers, target) {
  let len = numbers.length,
    left = 0,
    right = len - 1,
    mid = 0;
  for (let i = 0; i < len; ++i) {
    left = i + 1;
    while (left <= right) {
      mid = parseInt((right - left) / 2) + left;
      if (numbers[mid] == target - numbers[i]) {
        return [i + 1, mid + 1];
      } else if (numbers[mid] > target - numbers[i]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return [-1, -1];
};
