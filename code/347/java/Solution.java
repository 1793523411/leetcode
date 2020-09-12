class Solution {
    // 时间复杂度：O(nlogk)O(nlogk)O(nlogk)，nnn 表示数组的长度。首先，遍历一遍数组统计元素的频率，这一系列操作的时间复杂度是 O(n)O(n)O(n)；接着，遍历用于存储元素频率的 map，如果元素的频率大于最小堆中顶部的元素，则将顶部的元素删除并将该元素加入堆中，这里维护堆的数目是 kkk，所以这一系列操作的时间复杂度是 O(nlogk)O(nlogk)O(nlogk) 的；因此，总的时间复杂度是 O(nlog⁡k)O(nlog⁡k)O(nlog⁡k)。
    // 空间复杂度：O(n)O(n)O(n)，最坏情况下（每个元素都不同），map 需要存储 nnn 个键值对，优先队列需要存储 kkk 个元素，因此，空间复杂度是 O(n)O(n)O(n)。

    public int[] topKFrequent(int[] nums, int k) {
        // 使用字典，统计每个元素出现的次数，元素为键，元素出现的次数为值
        HashMap<Integer,Integer> map = new HashMap();
        for(int num : nums){
            if (map.containsKey(num)) {
               map.put(num, map.get(num) + 1);
             } else {
                map.put(num, 1);
             }
        }
        // 遍历map，用最小堆保存频率最大的k个元素
        PriorityQueue<Integer> pq = new PriorityQueue<>(new Comparator<Integer>() {
            @Override
            public int compare(Integer a, Integer b) {
                return map.get(a) - map.get(b);
            }
        });
        for (Integer key : map.keySet()) {
            if (pq.size() < k) {
                pq.add(key);
            } else if (map.get(key) > map.get(pq.peek())) {
                pq.remove();
                pq.add(key);
            }
        }
        // 取出最小堆中的元素
        List<Integer> res = new ArrayList<>();
        while (!pq.isEmpty()) {
            res.add(pq.remove());
        }
        return res.stream().mapToInt(Integer::valueOf).toArray();
    }
}