class Solution {
    //很暴力
    public String[] findRestaurant(String[] list1, String[] list2) {
        int min = list1.length+list2.length-2;
        String[] arr = new String[list1.length>list2.length?list2.length:list1.length];
        int count = 0;
        for(int i = 0;i<list1.length;i++) {
            for(int j = 0;j<list2.length;j++) {
                if(list1[i].equals(list2[j])) {
                    if(min>=i+j) {
                        min=i+j;
                    }
                }
            }
        }
         for(int i = 0;i<list1.length;i++) {
            for(int j = 0;j<list2.length;j++) {
                if(list1[i].equals(list2[j]) && i+j==min) {
                    arr[count++] = list1[i];
                }
            }
        }
        String[] brr = new String[count];
        for(int i = 0;i<count;i++) {
            brr[i] = arr[i];
        }
        return brr;
    }

    //Map
    public String[] findRestaurant(String[] list1, String[] list2) {
        Map<String, Integer> map = new HashMap<>();
        for (int i = 0; i < list1.length; i++) {
            map.put(list1[i], i);
        }
    
        List<String> list = new ArrayList<>();
        int minIndex = list1.length + list2.length;
        for (int i = 0; i < list2.length; i++) {
            if (map.containsKey(list2[i])) {
                int index = i + map.get(list2[i]);
                if(minIndex > index){
                    minIndex = index;
                    list.clear();
                    list.add(list2[i]);
                }else if(minIndex == index){
                    list.add(list2[i]);
                }
    
            }
        }
        return list.toArray(new String[list.size()]);
    }
}