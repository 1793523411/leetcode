class Solution{
    public int searchInsert(int[] nums, int target) {
        int len = nums.length;
        if (len == 0) {
            return 0;
        }
        
        int left = 0;
        // 因为有可能数组的最后一个元素的位置的下一个是我们要找的，故右边界是 len
        int right = len;
        while (left < right) {
            int mid = left + (right - left) / 2;
            // 小于 target 的元素一定不是解
            if (nums[mid] < target) {
                // 下一轮搜索的区间是 [mid + 1, right]
                left = mid + 1;
            } else {
              	// 下一轮搜索的区间是 [left, mid]
                right = mid;
            }
        }
        return left;
    }
    public int searchInsert2(int[] nums, int target) {
        for(int i = 0; i < nums.length; i++){
            if(target > nums[i]) continue;
            if(target == nums[i]) return i;
            if(target < nums[i]) return i;
        }
        return nums.length;
    }
}