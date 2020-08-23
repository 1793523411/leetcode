export default (nums) => {
    nums = nums.filter(item => item > 0)
    // 实现选择排序，先拿到最小值，如果第一个元素不是1直接返回1，如果是1，就要比相邻元素差值
    for (let i = 0, len = nums.length, min; i < len; i++) {
      min = nums[i]
      for (let j = i + 1; j < len; j++) {
        if (nums[j] < min) {
          let c = min
          min = nums[j]
          nums[j] = c
        }
      }
      nums[i] = min
      if (i > 0) {
        if (nums[i] - nums[i - 1] > 1) {
          return nums[i - 1] + 1
        }
      } else {
        if (min !== 1) {
          return 1
        }
      }
    }
    return nums.length ? nums.pop() + 1 : 1
}