/**
 * @param {number[]} nums
 * @return {number}
 */
//一个指针
var removeDuplicates = function (nums) {
  var count = 0;
  var n = nums.length;
  for (let i = 1; i < n; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[i - count] = nums[i];
    } else {
      count++;
    }
  }
  return n - count;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
//两个指针
var removeDuplicates = function (nums) {
  var j = 0;
  var n = nums.length;
  for (let i = 1; i < n; i++) {
    if (nums[i] != nums[i - 1]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
};
