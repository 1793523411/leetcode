class Plution {
    //暴力解法
    public boolean containsNearbyAlmostDuplicate(int[] nums, int k, int t) {
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            for (int j = 1; j <= k; j++) {
                if (i + j >= n) {
                    break;
                }
                if (Math.abs((long) nums[i] - nums[i + j]) <= t) {
                    return true;
                }
            }
        }
        return false;
    }
}