class Solution {
    public boolean isLongPressedName(String name, String typed) {
        if (typed.length() < name.length()) return false;
        int rIndex = 0;//name的指针
        for (int i = 0; i < typed.length(); i++) {
            char c = typed.charAt(i);
            if (c == name.charAt(rIndex == name.length() ? rIndex - 1 : rIndex)) {//相等则rIndex+1
                if (rIndex < name.length()) rIndex++;
            } else {//不相等则比较前一个
                if (rIndex == 0) return false;
                if (!(name.charAt(rIndex - 1) == c)) return false;
            }
        }
        return rIndex == name.length();//rIndex必须走到最后
    }
}
