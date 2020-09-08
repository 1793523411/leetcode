class Solution {
    public int firstUniqChar(String s) {
        int[] chars = new int[256];
        for(int i=0;i<s.length();i++){
            chars[s.charAt(i)]=chars[s.charAt(i)]+1;
        }

        for(int i=0;i<s.length();i++){
            if(chars[s.charAt(i)]==1){
                return i;
            }
        }
        return -1;

    }
}