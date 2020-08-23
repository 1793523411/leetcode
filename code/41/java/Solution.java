public class Solution{
    //暴力解法，一个一个找
    public int firstMissingPositive(int[] nums) {
        for (int i = 1; i <= nums.length; i++) {
            boolean has = false;
            for (int j = 0; j < nums.length; j++) {
                if (nums[j] == i) {
                    has = true;
                    break;
                }
            }
            if (!has) {
                //没有找到这个数，直接返回
                return i;
            }
        }
        return nums.length + 1;
    }


    //对查找进行优化，使用二分查找
    public int firstMissingPositive(int[] nums) {
        int len = nums.length;
        Arrays.sort(nums);//先排序
        for (int i = 1; i <= len; i++) {
            int res = binarySearch(nums, i);
            //一个个查找，如果没找到就返回
            if (res == -1)
                return i;
        }
        return len + 1;
    }
    //二分法查找，找到就返回位置下标，没找到就返回-1。
    private int binarySearch(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;
        while (left <= right) {
            int mid = left + ((right - left) >> 1);
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }

    //使用集合set解决，利用set来查找
    public int firstMissingPositive(int[] nums) {
        int len = nums.length;
        Set<Integer> hashSet = new HashSet<>();
        for (int num : nums) {
            hashSet.add(num);
        }
        for (int i = 1; i <= len; i++) {
            if (!hashSet.contains(i))
                return i;
        }
        return len + 1;
    }

    //利用桶排序
    public int firstMissingPositive(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            //如果在指定的位置就不需要修改
            if (i + 1 == nums[i])
                continue;
            int x = nums[i];
            if (x >= 1 && x <= nums.length && x != nums[x - 1]) {
                swap(nums, i, x - 1);
                i--;//抵消上面的i++，如果交换之后就不++；
            }
        }
        //最后在执行一遍循环，查看对应位置的元素是否正确，如果不正确直接返回
        for (int i = 0; i < nums.length; i++) {
            if (i + 1 != nums[i])
                return i + 1;
        }
        return nums.length + 1;
    }

    //交换两个数的值
    public void swap(int[] A, int i, int j) {
        if (i != j) {
            A[i] ^= A[j];
            A[j] ^= A[i];
            A[i] ^= A[j];
        }
    }

    //!使用位运算可达到0毫秒执行。。。。}