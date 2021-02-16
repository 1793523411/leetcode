var isStraight = function (nums) {
    nums = nums.sort((a, b) => a - b).filter((item) => item !== 0);
    if (nums[nums.length - 1] - nums[0] > 4) return false;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) return false;
    }
    return true;
};

function isStraight(nums) {
    let set = new Set();
    let max = 1,
        min = 14;
    for (let n of nums) {
        if (n !== 0) {
            if (set.has(n)) return false;
            set.add(n);
            max = Math.max(max, n);
            min = Math.min(min, n);
        }
    }
    return max - min < 5;
}