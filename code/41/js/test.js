export default (nums) => {
    // 过滤掉非正整数
    nums = nums.filter(item => item > 0)
    // 正整数数组是不是为空
    if (nums.length) {
      // 升序，目的：方便从左到右取最小值nums[0]
      nums.sort((a, b) => a - b)
      // 如果第一个元素不为1，返回1
      if (nums[0] !== 1) {
        return 1
      } else {
        // 从左边开始遍历，只要下一个元素和当前元素差值》1说明当前元素的下一个值（+1）
        for (let i = 0, len = nums.length - 1; i < len; i++) {
          if (nums[i + 1] - nums[i] > 1) {
            return nums[i] + 1
          }
        }
        // 如果数组是连续的正整数【1,2,3,4,5,6】
        return nums.pop() + 1
      }
    } else {
      return 1
    }
  }