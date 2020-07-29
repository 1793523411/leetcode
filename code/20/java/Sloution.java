class Solution {
    //暴力求解，哈哈哈
//     执行用时：38 ms, 在所有 Java 提交中击败了5.31% 的用户
// 内存消耗：40.3 MB, 在所有 Java 提交中击败了5.48% 的用户
    public boolean isValid(String s){
        String s1 = s;
        if(s.length() %2 != 0) return false;
        while(s.length() != 0){
            s = s.replace("{}","");
            s = s.replace("()","");
            s = s.replace("[]","");
            if(s == s1){
                return false;
            }
            s1 = s;
        }
        return true;
    }

//官方解法
    public boolean isValid2(String s) {
        char[] charArray = new char[s.length() + 1];

        int p = 1;

        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                charArray[p++] = c;
            } else {
                p--;
                if (c == ')' && charArray[p] != '(') {
                    return false;
                }
                if (c == '}' && charArray[p] != '{') {
                    return false;
                }
                if (c == ']' && charArray[p] != '[') {
                    return false;
                }
            }
        }
        return p == 1; // 如果左括号还有剩余 括号没有一一对应，属于无效情况
    }
}