class Solution {
    public int removeElement(int[] nums, int val) {
        int ans = 0;
        for(int num:nums){
            if(num!=val){
                nums[ans] = num;
                ans++;
            }
        }
        return ans;
    }
    //元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素
    public int removeElement2(int[] nums, int val) {
        int ans = nums.length;
        for(int i = 0 ;i <ans;){
            if(nums[i] == val){
                nums[i] = nums[ans-1];
                ans--;
            }else{
                i++;
            }
        }
        return ans;
    }
    public int removeElement3(int[] nums, int val) {
        int k = 0;
        int i = 0;
        while(i<nums.length){
            if(nums[i]==val){
                k++;
            }else{
                nums[i-k] = nums[i];
            }
            i++;
        }
        k = nums.length-k
        return k;
    }
}