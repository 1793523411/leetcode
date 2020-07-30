这题用DFS太暴力了，复杂度太高了

动态规划还行，转化为背包问题

这个问题可以转化为一个子集划分问题，而子集划分问题又是一个典型的背包问题。动态规划总是这么玄学，让人摸不着头脑……

首先，如果我们把 nums 划分成两个子集 A 和 B，分别代表分配 + 的数和分配 - 的数，那么他们和 target 存在如下关系：

```js
sum(A) - sum(B) = target
sum(A) = target + sum(B)
sum(A) + sum(A) = target + sum(B) + sum(A)
2 * sum(A) = target + sum(nums)
```
综上，可以推出 sum(A) = (target + sum(nums)) / 2，也就是把原问题转化成：nums 中存在几个子集 A，使得 A 中元素的和为 (target + sum(nums)) / 2？


动态规划我看不懂

先抄几串代码,等我出了新手村再回来搞

```javascript
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    if (nums == null || nums.length == 0) return 0;
    var sums = 0;
    nums.forEach(num => sums += num);
    if (sums < S || (S + sums) % 2 == 1) return 0;
    var p = (S + sums) >> 1;
    var dp = new Array(p + 1).fill(0);
    dp[0] = 1;
    nums.forEach(num => {
        for (var i = p; i >= num; i--) {
            dp[i] += dp[i - num];
        }
    })
    return dp[p];
};
```

```java
public int findTargetSumWays(int[] nums, int target) {
        int sum = 0;
        for (int num : nums) {
            sum += num;
        }
        if(sum < target || (sum+target)%2 == 1){
            return 0;
        }
        target = (target + sum) / 2;
        int[] dp = new int[target + 1];
        dp[0] = 1;
        for (int num : nums) {
            for (int i = target; i >= num; i--) {
                dp[i] += dp[i - num];

            }
        }
        return dp[target];
    }

```

```java
int findTargetSumWays(int[] nums, int target) {
    int sum = 0;
    for (int n : nums) sum += n;
    // 这两种情况，不可能存在合法的子集划分
    if (sum < target || (sum + target) % 2 == 1) {
        return 0;
    }
    return subsets(nums, (sum + target) / 2);
}

/* 计算 nums 中有几个子集的和为 sum */
int subsets(int[] nums, int sum) {
    int n = nums.length;
    int[][] dp = new int[n + 1][sum + 1];
    // base case
    for (int i = 0; i <= n; i++) {
        dp[i][0] = 1;
    }
    
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j <= sum; j++) {
            if (j >= nums[i-1]) {
                // 两种选择的结果之和
                dp[i][j] = dp[i-1][j] + dp[i-1][j-nums[i-1]];
            } else {
                // 背包的空间不足，只能选择不装物品 i
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    return dp[n][sum];
}

//然后，发现这个 dp[i][j] 只和前一行 dp[i-1][..] 有关，那么肯定可以优化成一维 dp：

/* 计算 nums 中有几个子集的和为 sum */
int subsets(int[] nums, int sum) {
    int n = nums.length;
    int[] dp = new int[sum + 1];
    // base case
    dp[0] = 1;
    
    for (int i = 1; i <= n; i++) {
        // j 要从后往前遍历
        for (int j = sum; j >= 0; j--) {
            // 状态转移方程
            if (j >= nums[i-1]) {
                dp[j] = dp[j] + dp[j-nums[i-1]];
            } else {
                dp[j] = dp[j];
            }
        }
    }
    return dp[sum];
}

```