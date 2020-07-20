
public class test {
    public static String longestPalindrome(String s) {
        if (s == null || s.length() == 0) {
            return "";
        }
        int[] range = new int[2];
        char[] str = s.toCharArray();
        for (int i = 0; i < s.length(); i++) {
            i = findLongest(str, i, range);
        }
        System.out.println(range[0]);//1
        System.out.println(range[1]+1);//4
        System.out.println(s);//��ȡС��1-3
        return s.substring(range[0], range[1] + 1);
    }

    public static int findLongest(char[] str, int low, int[] range) {
        int high = low;
        //�����������ַ�
        while (high < str.length - 1 && str[high + 1] == str[low]) {
            high++;
        }
        int ans = high;
        //���м���������
        while (low > 0 && high < str.length - 1 && str[low - 1] == str[high + 1]) {
            low--;
            high++;
        }
        if (high - low > range[1] - range[0]) {
            range[0] = low;
            range[1] = high;
        }
        return ans;
    }

    public static void main(String[] args) {
        String s = longestPalindrome("abbbs");
        System.out.println(s);
    }
}

/**
 * class Solution {
    public String longestPalindrome(String s) {
        if (s == null || s.length() == 0) {
            return "";
        }
//         ������ʼλ�ã��������������ƺ��ܱ�ȫ�ֱ����Կ�һ��
        int[] range = new int[2];
        char[] str = s.toCharArray();
        for (int i = 0; i < s.length(); i++) {
//             �ѻ��Ŀ����м�Ĳ���ȫ��ͬһ�ַ������Ҳ�����Գ�
//             �ҵ���һ���뵱ǰ�ַ���ͬ���ַ�
            i = findLongest(str, i, range);
        }
        return s.substring(range[0], range[1] + 1);
    }
    
    public static int findLongest(char[] str, int low, int[] range) {
//         �����м䲿��
        int high = low;
        while (high < str.length - 1 && str[high + 1] == str[low]) {
            high++;
        }
//         ��λ�м䲿�ֵ����һ���ַ�
        int ans = high;
//         ���м���������ɢ
        while (low > 0 && high < str.length - 1 && str[low - 1] == str[high + 1]) {
            low--;
            high++;
        }
//         ��¼��󳤶�
        if (high - low > range[1] - range[0]) {
            range[0] = low;
            range[1] = high;
        }
        return ans;
    }
}
 */