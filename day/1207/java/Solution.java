class Solution{
    //!先计算每个数出现的次数，再存放到集合set中，判断长度
    public boolean uniqueOccurrences(int[] arr) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < arr.length; i++) {
            map.put(arr[i], map.getOrDefault(arr[i], 0) + 1);
        }
        return map.size() == new HashSet<>(map.values()).size();
    }

    //!题中提示中数组的大小和长度都有了限制，所以我们还可以使用数组。
    public boolean uniqueOccurrences(int[] arr) {
        int[] count = new int[2001];
        for (int i = 0; i < arr.length; i++) {
            count[1000 + arr[i]]++;
        }
        Set<Integer> set = new HashSet<>();
        for (int value : count) {
            if (value == 0)
                continue;
            if (!set.add(value))//如果存储失败，说明有重复的
                return false;
        }
        return true;
    }
}