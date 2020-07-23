public class Solution {
    public static int myAtoi(String str) {
        char[] chars = str.toCharArray();
        int n = chars.length;
        int idx = 0;

        while(idx<n&&chars[idx] == ' '){

            idx++;
        }
        if(idx == n){
            return 0;
        }
        boolean negative = false;
        if (chars[idx] == '-') {
            //遇到负号
            negative = true;
            idx++;
        } else if (chars[idx] == '+') {
            // 遇到正号
            idx++;
        } else if (!Character.isDigit(chars[idx])) {
            // 其他符号
            return 0;
        }
        int ans = 0;
        while(idx < n && Character.isDigit(chars[idx])){
            int digit = chars[idx] - '0';
            if(ans > (Integer.MAX_VALUE - digit) / 10){
                return negative? Integer.MIN_VALUE : Integer.MAX_VALUE;
            }
            ans = ans * 10 + digit;
            idx++;
        }
        return negative? -ans : ans;
    }
    public static void main(String[] args) {
        System.out.println(myAtoi("4193 with words"));
        System.out.println(myAtoi("-42"));
        System.out.println(myAtoi("words and 987"));
        System.out.println(myAtoi("42"));
        System.out.println(myAtoi("-91283472332"));
    }
}