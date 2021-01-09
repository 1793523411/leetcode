/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.nums = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.nums
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    //洗牌算法
    const nums = this.nums.slice(0);
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        const rand = randOne(i, n - 1);//必须加分号
        [ nums[i], nums[rand] ] = [ nums[rand], nums[i] ];
    }
    return nums
};

//数组的随机下标 = Math.random() * 数组长度取整。随机排序时浅拷贝不修改原数组
// Solution.prototype.shuffle = function() {
//     var nums = this.nums.slice()
//     nums.forEach((_, i, a, j) => (j = Math.random() * a.length | 0, [a[i], a[j]] = [a[j], a[i]]))
//     return nums
// };

function randOne(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n
}
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */