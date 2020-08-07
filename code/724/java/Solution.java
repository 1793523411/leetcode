class Solution {
    public int pivotIndex(int[] nums) {
        int sumTotal = 0;
        int sumLeft = 0;
        for(int i = 0;i<nums.length;i++){
            sumTotal += nums[i]
        }
        for(int p = 0; p<nums.length;p++){
            if(sumLeft*2 == sumTotal - nums[p]){
                return p;
            }
            sumLeft += nums[p]
        }
        return -1;
    }
}