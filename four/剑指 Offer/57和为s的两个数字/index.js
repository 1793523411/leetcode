var twoSum = function (nums, target) {
    let i = 0
    let j = nums.length - 1
    while (i !== j) {
        let sum = nums[i] + nums[j]
        if (sum > target) j--
        if (sum < target) i++
        if (sum === target) return [nums[i], nums[j]]
    }
};


var twoSum = function(nums, target) {
    let map = {};
    nums.forEach((item) => {
      map[item] = item;
    });
    for (let i of nums) {
      if (map[target - i]) {
        return [target - map[i], i];
      }
    }
  };