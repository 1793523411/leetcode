class Solution{
    public int[] smallerNumbersThanCurrent(int[] nums) {
        int len = nums.length;
        int[] res = new int[len];
        for (int i = 0; i < len; i++) { // 枚举所有元素
            for (int j = 0; j < len; j++) { // 枚举其他元素
                if (i == j) continue;
                if (nums[i] > nums[j]) res[i]++;
            }
        }
        return res;
    }

    public int[] smallerNumbersThanCurrent(int[] nums) { // 8, 1, 2, 2, 3
        int len = nums.length;
        Map<Integer, Set<Integer>> valueIndex = new HashMap<>(len); // 预存每个值与索引对应
        for (int i = 0; i < len; i++) {
            if (!valueIndex.containsKey(nums[i])) valueIndex.put(nums[i], new HashSet<>());
            valueIndex.get(nums[i]).add(i);
        }
        int[] sortedArr = Arrays.copyOf(nums, len), res = new int[len];
        Arrays.sort(sortedArr); // 1, 2, 2, 3, 8
        for (int si = len - 1; si >= 0; si--) { // 倒序，方便处理同值的情况
            // 此行为补充优化：前面还有同值的，那就跳过这次，等下次再一并赋值
            if (si - 1 >= 0 && sortedArr[si] == sortedArr[si - 1]) continue;
    
            for (int i : valueIndex.get(sortedArr[si])) res[i] = si; // 同值的所有索引都更新
        }
        return res;
    }

    public int[] smallerNumbersThanCurrent(int[] nums) {
        // 统计出现频率 frequency
        int[] freq = new int[101]; // 索引即数值
        for (int num : nums) freq[num]++;
    
        // 对频率(而非对原数组nums)从前到后累加
        for (int i = 1; i < freq.length; i++) {
            freq[i] = freq[i] + freq[i - 1];
        }
    
        // 输出结果
        int[] res = new int[nums.length];
        for (int i = 0; i < res.length; i++) {
            if (nums[i] > 0) res[i] = freq[nums[i] - 1];
        }
        return res;
    }
}