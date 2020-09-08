class Solution2 {
    public boolean isIsomorphic(String s, String t) {
        return canMap(s, t) && canMap(t, s);//ab aa
    }
    
    private boolean canMap(String s, String t){
        int[] map = new int[128]; // ascii 128个字符
        char[] chars1 = s.toCharArray();
        char[] chars2 = t.toCharArray();
        for(int i = 0; i < chars1.length; i++){
            if(map[chars1[i]] == 0)
                map[chars1[i]] = chars2[i];
            else {
                if(map[chars1[i]] != chars2[i])
                    return false;
            }
        }
        return true;
    }

    public boolean isIsomorphic2(String s, String t) {
        int[] map1 = new int[128];
        int[] map2 = new int[128];
        char[] chars1 = s.toCharArray();
        char[] chars2 = t.toCharArray();
        for(int i = 0; i < chars1.length; i++){
            if(map1[chars1[i]] == 0 && map2[chars2[i]] == 0) { // 还没有建立相互的映射
                map1[chars1[i]] = chars2[i]; // 从1到2的映射 角标表示1中的字符，值表示隐射到的值
                map2[chars2[i]] = chars1[i];
            } else if (map1[chars1[i]] == chars2[i] && map2[chars2[i]] == chars1[i])
                continue;
            else return false;
        }
        return true;
    }
}