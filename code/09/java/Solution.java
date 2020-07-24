pubclass Solution {
    class Solution {
        public boolean isPalindrome(int x) {
            String reversedStr = (new StringBuilder(x + "")).reverse().toString();
            return (x + "").equals(reversedStr);
        }
    }
//     执行用时：19 ms, 在所有 Java 提交中击败了9.96% 的用户
// 内存消耗：38.9 MB, 在所有 Java 提交中击败了5.14% 的用户
    class Solution2 {
        public boolean isPalindrome(int x) {
            int x2 = x;
            int res = 0;
            if(x<0) return false;
            while(x!=0){
                res = res *10 +x%10;
                x /= 10;
            }
            return x2 == res;
        }
    }
//     执行用时：9 ms, 在所有 Java 提交中击败了98.74% 的用户
// 内存消耗：39.4 MB, 在所有 Java 提交中击败了5.14% 的用户
    public static void main(String[] args) {
        
    }
}