class Solution{
    public static String minWindow(String s, String t) {
        if (s == null || s == "" || t == null || t == "" || s.length() < t.length()) {
            return "";
        }
        //用来统计t中每个字符出现次数
        int[] needs = new int[128];
        //用来统计滑动窗口中每个字符出现次数
        int[] window = new int[128];
    
        for (int i = 0; i < t.length(); i++) {
            needs[t.charAt(i)]++;
        }
    
        int left = 0;
        int right = 0;
    
        String res = "";
    
        //目前有多少个字符
        int count = 0;
    
        //用来记录最短需要多少个字符。
        int minLength = s.length() + 1;
    
        while (right < s.length()) {
            //!寻找一个「可行解」
            char ch = s.charAt(right);
            window[ch]++;
            //>>>>>>>>>>>>>>>>>>
            if (needs[ch] > 0 && needs[ch] >= window[ch]) {
                count++;
            }
    
            //移动到不满足条件为止
            //!优化这个「可行解」
            while (count == t.length()) {
                ch = s.charAt(left);
                //<<<<<<<<<<<<<<<<<<<<<<<<
                if (needs[ch] > 0 && needs[ch] >= window[ch]) {
                    count--;
                }
                if (right - left + 1 < minLength) {
                    minLength = right - left + 1;
                    res = s.substring(left, right + 1);
    
                }
                window[ch]--;
                left++;
    
            }
            right++;
    
        }
        return res;
    }

    //!使用两个哈希表，一个记录所需要的字符还需要多少，另一个记录当前滑动窗口中各字符的数量有多少，count记录滑动窗口中已经包含了t中多少字符。开始左指针不动，右指针向右移动，直到窗口中包含了t中全部字符，开始移动左指针收缩，收缩到窗口中刚好不满足t中的字符为止。如此循环，一旦count==t.length说明当前是满足条件的，记录此时的大小和字符串
    class Solution {
        public String minWindow(String s, String t) {
            int[] window = new int[128], need = new int[128];
            char[] ss = s.toCharArray(), tt = t.toCharArray();
            int count = 0, min = ss.length;
            String res = "";
            for (int i = 0; i < tt.length; i++) {
                need[tt[i]]++;
            }
            int i = 0, j = 0;
            while(j < ss.length) {
                char c = ss[j];
                window[c]++;
                if (window[c] <= need[c]) count++;
                while(count == tt.length) {
                    if (j - i + 1 <= min){
                        res = s.substring(i, j + 1);
                        min = j - i + 1;
                    }
                    window[ss[i]]--;
                    if (window[ss[i]] < need[ss[i]]) count--;
                    i++;
                    if (i >= ss.length) break;
                }
                j++;
            }
            return res;
        }
    }
}