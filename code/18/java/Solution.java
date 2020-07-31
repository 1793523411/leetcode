class Solution {
    //比三数之和多一层循环，解题思路大致一样
    public List<List<Integer>> fourSum(int[] nums, int target) {
        int len = nums.length;
        List<List<Integer>> ans = new ArrayList<>();
        if(len < 4){
            return ans;
        }
        Arrays.sort(nums);
        //判断一下边界
        if(target < nums[0]+nums[1]+nums[2]+nums[3] || target > nums[len-1]+nums[len-2]+nums[len-3]+nums[len-4]){
            return ans;
        }
        for(int i = 0 ;i<len-3;i++){
            //去除重复
            if(i>0&&nums[i]==nums[i-1]){
                continue;
            }
            //判断一下边界
            if(target < nums[i]+nums[i+1]+nums[i+2]+nums[i+3]){
                break;
            }
            //判断一下边界
            if(target > nums[i]+nums[len-1]+nums[len-2]+nums[len-3]){
                continue;
            }
            for(int j = i+1; j<len-2;j++){
                //去除重复
                if(j>i+1 && nums[j] == nums[j-1]){
                    continue;
                }
                //判断一下边界
                if(target < nums[i]+nums[j]+nums[j+1]+nums[j+2]){
                    break;
                }
                //判断一下边界
                if(target > nums[i]+nums[j]+nums[len-1]+nums[len-2]){
                    continue;
                }
                int L = j + 1,R = len - 1;
                while(L<R){
                    int sum = nums[i]+nums[j]+nums[L]+nums[R];
                    if(sum == target){
                        ans.add(Arrays.asList(nums[i],nums[j],nums[L],nums[R]));
                        L++;
                        //去除重复
                        while(L<R&&nums[L-1] == nums[L]){
                            L++;
                        }
                        R--;
                        //去除重复
                        while(L<R&&nums[R+1] == nums[R]){
                            R--;
                        }
                    }else if(sum>target){
                        R--;
                        //去除重复
                        while(L<R&&nums[R+1] == nums[R]){
                            R--;
                        }
                    }else {
                        L++;
                        //去除重复
                        while(L<R&&nums[L-1] == nums[L]){
                            L++;
                        }
                    }
                }
            }
        }
        return ans;
    }
    //来一个简洁版的，但没上面那个快，以为上面那个进行了优化，提前判断了边界
    public List<List<Integer>> fourSum2(int[] nums, int target) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(nums);

        for(int i=0;i<nums.length-2;i++){
            if(i!=0&&nums[i]==nums[i-1]){
                continue;
            }
            for(int j = i+1;j<nums.length;j++){
                if(j!=i+1 && nums[j]==nums[j-1]){
                    continue;
                }
                int left = j+1;
                int right = nums.length - 1;
                while(left < right){
                    if((left != j + 1 && nums[left] == nums[left-1]) || nums[i] + nums[j] + nums[left] + nums[right] < target){
                        left++;
                    }else if((right != nums.length -1 && nums[right] == nums[right + 1]) || nums[i] + nums[j] + nums[left] + nums[right] > target){
                        right--;
                    }else{
                        List<Integer> list = new ArrayList<>();
                        list.add(nums[i]);
                        list.add(nums[j]);
                        list.add(nums[left]);
                        list.add(nums[right]);

                        result.add(list);
                        left++;
                        right--;
                    }
                }
            }
        }
        return result;
    }
}