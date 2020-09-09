class Solution2 {
    //不考虑内存 和 磁盘的限制
    public int[] intersect(int[] nums1, int[] nums2) {
        List<Integer> temp = new ArrayList<>();
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        for(int i = 0, j = 0; i < nums1.length && j < nums2.length; ){
            if(nums1[i] > nums2[j]) j++;
            else if(nums1[i] < nums2[j]) i++;
            else {
                temp.add(nums1[i]);
                i++;
                j++;
            }
        }
        int[] res = new int[temp.size()];
        for(int i = 0; i < res.length; i++)
            res[i] = temp.get(i);
        return res;
    }

    //考虑内存 和 磁盘的限制
    public int[] intersect2(int[] nums1, int[] nums2) {
        Map<Integer, Integer> map1 = new HashMap<>((int)(nums1.length / 0.75F + 1.0F));
        Map<Integer, Integer> map2 = new HashMap<>((int)(nums1.length / 0.75F + 1.0F));
        for(int i : nums1)
            map1.put(i, map1.getOrDefault(i, 0) + 1);
        for(int i : nums2)
            map2.put(i, map2.getOrDefault(i, 0) + 1);
        List<Integer> temp = new ArrayList<>();
        for(int key : map1.keySet()){
            if(map2.containsKey(key)){
                for(int i = 0; i < Math.min(map1.get(key), map2.get(key)); i++)
                    temp.add(key);
            }
        }
        int[] res = new int[temp.size()];
        for(int i = 0; i < res.length; i++)
            res[i] = temp.get(i);
        return res;
    }
}