class WordDictionary {

    //!暴力解法，由于有些暴力，出现了超时。

    HashSet<String> set;

    /** Initialize your data structure here. */
    public WordDictionary() {
        set = new HashSet<>();
    }

    /** Adds a word into the data structure. */
    public void addWord(String word) {
        set.add(word);
    }

    /**
	 * Returns if the word is in the data structure. A word could contain the
	 * dot character '.' to represent any one letter.
	 */
    public boolean search(String word) {
        if (set.contains(word)) {
            return true;
        }
        for (String s : set) {
            if (equal(s, word)) {
                return true;
            }
        }
        return false;
    }

    private boolean equal(String s, String word) {
        char[] c1 = s.toCharArray();
        char[] c2 = word.toCharArray();
        int n1 = s.length();
        int n2 = word.length();
        if (n1 != n2) {
            return false;
        }
        for (int i = 0; i < n1; i++) {
            //. 代表任意字符，跳过
            if (c1[i] != c2[i] && c2[i] != '.') {
                return false;
            }
        }
        return true;
    }
}