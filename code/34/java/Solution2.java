class Solution {
    public int[] searchRange(int[] nums, int target) {
       int l =0,r = nums.length-1;
       while(l <= r){
           int mid = l +(r-l)/2;
           if(nums[mid] > target){
               r = mid-1;
           }
           else if(nums[mid] < target){
               l = mid+1;
           }
//找到目标值
           else if(nums[mid] == target){
               l = mid;
               r = mid;
//向右继续寻找
               while(r+1<nums.length && nums[r+1] == target){
                   r++;
               }
//向左继续寻找
               while(l-1>=0 && nums[l-1] == target){
                   l--;
               }
               return new int[]{l,r};
           }
       }
       return new int[]{-1,-1};
}
}
