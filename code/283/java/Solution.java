class Solution {
    //覆盖
    public void moveZeroes(int[] nums) {
      int index = 0;
      for(int num:nums){
          if(num!=0){
              nums[index++]=num;
          }
      }
      while(index<nums.length){
          nums[index++] = 0;
      }
    }
    
//快慢指针
    public void moveZeroes(int[] nums) {
        int head = 0;
        for(int tail = 0; tail < nums.length; ++tail){
            if(nums[tail] != 0){
                int num = nums[head];
                nums[head] = nums[tail];
                nums[tail] = num;
                head++;
            }
        }
    }
}