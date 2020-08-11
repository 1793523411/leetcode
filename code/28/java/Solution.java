// Java
class Solution {
    public int strStr(String haystack, String needle) {
        int hLen = haystack.length(), nLen = needle.length();
        for (int i = 0; i <= hLen - nLen; i++){ // 等于，适用于两者长度相等的情况下（包含都为 ”“）
            int j = 0;
            for (;j < nLen; j++){
                if (haystack.charAt(i + j) != needle.charAt(j)) {
                    break;
                }
            }
            if (j == nLen){
                return i;
            }
        }
        return -1;
    }
};
