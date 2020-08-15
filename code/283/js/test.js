/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  nums.sort((a, b) => (b === 0 ? -1 : 0));
};


//快慢指针
var moveZeroes = (nums) => {
  let i = 0,
    j = 0;
  for (; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j++;
    }
  }
};
