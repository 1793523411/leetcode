

public class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // 记录字符上一次出现的位置
        int[] last = new int[128];
        for(int i = 0; i < 128; i++) {
            last[i] = -1;
        }
        int n = s.length();

        int res = 0;
        int start = 0; // 窗口开始位置
        for(int i = 0; i < n; i++) {
            // index为ASCII码，index也可以为字符下标
            int index = s.charAt(i);
            // System.out.println(index);
            start = Math.max(start, last[index] + 1);
            System.out.println(start);
            res   = Math.max(res, i - start + 1);
            last[index] = i;
        }

        return res;
    }
    public static void main(String[] args) {
        String s = "abcabcbb";
        int res = Solution.lengthOfLongestSubstring(s);
        System.out.println(res);
        
    }
}

/**
 * 执行用时：2 ms, 在所有 Java 提交中击败了100.00% 的用户
 *内存消耗：39.9 MB, 在所有 Java 提交中击败了5.20% 的用户
 */