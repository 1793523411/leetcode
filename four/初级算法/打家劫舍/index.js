/**
 * @param {number[]} nums
 * @return {number}
 */
//动态规划f(k)=max{f(k−1),H.k−1+f(k−2)}
var rob = function (nums) {
    if (nums.length == 0) {
        return 0
    }
    let N = nums.length
    let dp = [];
    dp[0] = 0;
    dp[1] = nums[0];
    for (let k = 2; k <= N; k++) {
        //如果偷这个房子，那么前一个房子H_k−2显然不能偷，其他房子不受影响。那么问题就变成在前 k-2 个房子中偷到的最大的金额
        dp[k] = Math.max(dp[k - 1], nums[k - 1] + dp[k - 2])
    }
    return dp[N]
};

//对上面进行空间优化
var rob = function (nums) {
    let prev = 0;
    let curr = 0;
    for (const i of nums) {
        //curr 表示 dp[k-1]，prev 表示 dp[k-2]
        let temp = Math.max(curr, prev + i);
        prev = curr;
        curr = temp;
    }
    return curr
}
