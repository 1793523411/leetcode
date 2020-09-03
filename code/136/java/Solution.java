class Solution {
    public int singleNumber(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        for (Integer i : nums) {
            Integer count = map.get(i);
            count = count == null ? 1 : ++count;
            map.put(i, count);
        }
        for (Integer i : map.keySet()) {
            Integer count = map.get(i);
            if (count == 1) {
                return i;
            }
        }
        return -1; // can't find it.
    }

    // 异或有交换律定理，相当于将相同的数字先异或，这样两两异或就只剩0了，然后0再和最后的一个数字异或得到最终值，膜拜大佬
        // > 3^3
        // 0
        // > 3^4^3
        // 4
        // >                                                                                                       
    public int singleNumber(int[] nums) {
        int ans = nums[0];
        if (nums.length > 1) {
        for (int i = 1; i < nums.length; i++) {
            ans = ans ^ nums[i];
        }
        }
        return ans;
    }
}
