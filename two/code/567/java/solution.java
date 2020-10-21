class Solution {
    public boolean checkInclusion(String s1, String s2) {
    if (s1.length() > s2.length())
            return false;
        int[] needs = new int[26];
        int[] res = new int[26];
        int len1 =s1.length();
        int len2 =s2.length();
        for (int i = 0; i < len1; i++) {
            needs[s1.charAt(i) - 'a']++;
            res[s2.charAt(i) - 'a']++;
        }
        for (int i = 0; i < len2 - len1; i++) {
            if (Arrays.equals(res, needs))
                return true;
            res[s2.charAt(i + len1) - 'a']++;
            res[s2.charAt(i) - 'a']--;
        }
        return Arrays.equals(res, needs);
    }
}