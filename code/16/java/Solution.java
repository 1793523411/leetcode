class Solution {
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int ans = nums[0] + nums[1] + nums[2];
        for(int i = 0;i<nums.length-2 ;i++){
            int start = i + 1,end = nums.length - 1;
            while(start < end){
                int sum = nums[start] + nums[end]+ nums[i];
                if(Math.abs(target-sum) < Math.abs(target-ans)){
                    ans = sum;
                }
                //因为数组是有序的
                if(sum > target) end--;
                else if (sum < target) start++;
                else return ans;
            }
        }
        return ans;
    }
}