class Solution {
    public int removeDuplicates(int[] nums) {
        if(nums == null || nums.length == 0) return 0;
        int p = 0;
        int q = 1;
        while(q<nums.length){
            if(nums[p] != nums[q]){
                nums[p+1] = nums[q];
                p++;
            }
            q++;
        }
        return p+1;
    }

    //小优化
    public int removeDuplicates2(int[] nums) {
        if(nums == null || nums.length == 0) return 0;
        int p = 0;
        int q = 1;
        while(q<nums.length){
            if(nums[p] != nums[q]){
                if(q-p>1){
                    nums[p+1] = nums[q];
                }
                p++;
            }
            q++;
        }
        return p+1;
    }
}