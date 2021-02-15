var maxSlidingWindow = function (nums, k) {
    let n = nums.length;
    if (n == 0) {
        return [];
    }
    let cur = 0; // cur记录的当前最大值的索引，而不是值，方便后面的代码编写
    let left = 0;
    let right = 0;
    let res = [];
    while (right < n) {
        if (nums[cur] <= nums[right]) {
            cur = right;
        }
        right++;
        if (right - left == k) { // 扫描完成当前窗口
            res[left] = nums[cur];
            if (left == cur) { // 说明当前窗口的最大值索引在当前窗口的左窗口处
                left++;
                cur = left;
                right = left;
            } else {
                left++;
            }
            if (left == n - k + 1) {
                return res;
            }
        }
    }
    return res;
};

var maxSlidingWindow = function (nums, k) {
    if (nums.length == 0) {
        return [];
    } //判断如果是空数组就直接返回
    var arr = [];
    for (
        var i = 0;
        i < k - 1;
        i++ //获取到数组初始的前k-1个数字加入到新数组中
    ) {
        arr.push(nums[i]);
    }
    var rarr = [];
    for (var i = k - 1; i < nums.length; i++) {
        arr.push(nums[i]); //加入下一个数
        rarr.push(Math.max(...arr)); //取最大值
        arr.shift(); //取出第一个数
    }
    return rarr;
};