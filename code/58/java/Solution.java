class Solution {
    public int lengthOfLastWord(String s) {
        int res = 0, i = s.length() - 1;
        while (i >= 0) {
            if (s.charAt(i--) != ' ') res++; // 非空则计数
            else if (res > 0) return res; // 为空，但之前已经计过数了
        }
        return res;
    }
}