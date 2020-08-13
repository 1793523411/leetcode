public class Solution {
    public int findMaxConsecutiveOne(int[] nums){
        int length = nums.length;
        int max = 0;
        int count = 0;

        for(int i = 0 ; i < length ; i ++){
            if(nums[i] == 1){
                count++;
            }
            else{
                if(count > max) max = count;
                count = 0;
            }
        }
        return max > count?max : count;
    }
    //快慢指针
    public int findMaxConsecutiveOne(int[] nums){
        int length = nums.length;
        int left = 0;
        int right = 0;
        int maxSize = 0;
        while(right < length){
            if(nums[right++] == 0){
                maxSize = Math.max(maxSize,right-left-1);
                left = right;
            }
        }
        return Math.max(maxSize,right - left);
    }
}