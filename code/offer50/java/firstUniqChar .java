public class firstUniqChar {
    public char firstUniqChar(String s) {
        int[] count = new int[256];
        char[] chars = s.toCharArray();
        for(char c : chars)
            count[c]++;
        for(char c : chars){
            if(count[c] == 1)
                return c;
        }
        return ' ';
    }
}
