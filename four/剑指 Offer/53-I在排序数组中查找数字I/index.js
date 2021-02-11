var search = function (nums, target) {
    let i = 0;
    let j = nums.length;
    let res = 0;
    while (i < j) {
        let m = i + ((j - i) >> 1);
        if (nums[m] == target) {
            // 找到了, 往两边计数
            res++; // 找到了, 先计个数
            let t = m;
            while (nums[--m] === target) res++; // 左边计数
            while (nums[++t] === target) res++; // 右边计数
            return res;
        } else if (nums[m] < target) {
            // 中间值小于目标, 说明目标在右侧
            i = m + 1;
        } else {
            // 大于目标, 说明在左侧
            j = m;
        }
    }
    return res;
};

var search = function (nums, target) {
    if (!nums.length) return 0;

    let left = 0,
        right = nums.length - 1;
    while (nums[left] !== target && left < nums.length) {
        ++left;
    }
    while (nums[right] !== target && right >= 0) {
        --right;
    }

    return left <= right ? right - left + 1 : 0;
};