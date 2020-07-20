

public class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // ��¼�ַ���һ�γ��ֵ�λ��
        int[] last = new int[128];
        for(int i = 0; i < 128; i++) {
            last[i] = -1;
        }
        int n = s.length();

        int res = 0;
        int start = 0; // ���ڿ�ʼλ��
        for(int i = 0; i < n; i++) {
            // indexΪASCII�룬indexҲ����Ϊ�ַ��±�
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
 * ִ����ʱ��2 ms, ������ Java �ύ�л�����100.00% ���û�
 *�ڴ����ģ�39.9 MB, ������ Java �ύ�л�����5.20% ���û�
 */