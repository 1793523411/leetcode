class Solution {
    //暴力求解
    public int numJewelsInStones(String J, String S) {
        int result = 0;
        for (int i = 0;i<J.length();i++)
        {
            String a = J.substring(i,i+1);
            for (int j = 0;j<S.length();j++){
                String b = S.substring(j,j+1);
                if(a.equals(b))
                    result++;
            }
        }
        J.substring(0,1);
        return result;
    }
    //使用哈希表
    public int numJewelsInStones(String J, String S) {
        int result = 0;
        HashMap<String, Integer> map = new HashMap<String, Integer>();
        for (int h = 0;h<S.length();h++)
        {
            String b = S.substring(h,h+1);
            if( map.get(b)==null){
                map.put(b, 1);
            }else{
                map.put(b, map.get(b)+1);
            }
        }
        for (int i = 0;i<J.length();i++)
        {
            String a = J.substring(i,i+1);
            if(map.containsKey(a))
                result=result+map.get(a);
        }
        return result;
    }
    //使用桶代替哈希表
    public int numJewelsInStones(String J, String S) {
        char[] Jc = J.toCharArray();
        char[] Sc = S.toCharArray();
        int result = 0;
        int[] indexMap = new int[150];
        for (int h = 0;h<S.length();h++)
        {
            indexMap[Sc[h]] = indexMap[Sc[h]]+1;
        }
        for (int i = 0;i<J.length();i++)
        {
            char a = Jc[i];
            result=result+indexMap[a];
        }
        return result;
    }
}