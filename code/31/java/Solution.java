public class Solution {
    public void nextPermutation(int[] nums){
        int n = nums.length - 1;
        for(int i = n-1; i>=0; i--){
            if(nums[i] < nums[i+1]){
                int j = nums.length - 1;
                for(;j>i && nums[j] <= nums[i]; j--);
                exch(nums,i,j);
                // 交换完后，只保证了i这一位及其高位排列正确了，但是i的右边还是递减的数字，不是下一个最大的排列。例如上面的例子123654，交换后为124653，还需要将i右边变为升序（124356），这里使用的是双指针（g更稳），也可以直接使用排序
                reverse(nums,i+1,n);
                return;
            }
        }
        reverse(nums,0,n);
    }
    private void exch(int[] nums, int i, int j){
        int tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
    private void reverse(int[] nums, int lo,int hi){
        while(lo<hi){
            exch(nums,lo++,hi--);
        }
    }
}