class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        // 将长度短的数组换到前面。
        if (nums1.length > nums2.length) {
            return intersect(nums2, nums1);
        }
        // 创建 HashMap 记录 nums1 中每个元素出现的次数。
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int num : nums1) {
            int count = map.getOrDefault(num, 0) + 1;
            map.put(num, count);
        }
        int[] ans = new int[nums1.length];
        int index = 0;
        // 遍历数组 nums2 中元素，在 HashMap 中个数大于 0 则记录。
        for (int num : nums2) {
            int count = map.getOrDefault(num, 0);
            if (count > 0) {
                ans[index++] = num;
                count--;
                if (count > 0) {
                    map.put(num, count);
                } else {
                    map.remove(num);
                }
            }
        }
        // 遍历完成返回重复元素长度的结果数组。
        return Arrays.copyOfRange(ans, 0, index);
    }
}