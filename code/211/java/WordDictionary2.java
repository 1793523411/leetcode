class WordDictionary2 {

//!    至于优化的话，我们不要将加入的字符串一股脑的放入一个 set 中，可以通过长度进行分类，将长度相同的放到一个 set 中。这样一个一个匹配的时候，规模会减小一些。上边是按长度分类进行添加的，同样的我们还可以按照字符串的开头字母进行分类。当然，算法的速度同样也依赖于数据的分布，适用于数据分布均匀的情况


    HashMap<Integer,HashSet<String>> map;

    /** Initialize your data structure here. */
    public WordDictionary() {
        map = new HashMap<>();
    }

    /** Adds a word into the data structure. */
    public void addWord(String word) {
        int n = word.length();
        //将字符串加入对应长度的 set 中
        if (map.containsKey(n)) {
            HashSet<String> set = map.get(n);
            set.add(word);
        } else {
            HashSet<String> set = new HashSet<String>();
            set.add(word);
            map.put(n, set);
        }
    }

    /**
	 * Returns if the word is in the data structure. A word could contain the
	 * dot character '.' to represent any one letter.
	 */
    public boolean search(String word) {
        HashSet<String> set = map.getOrDefault(word.length(), new HashSet<String>());
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
            if (c1[i] != c2[i] && c2[i] != '.') {
                return false;
            }
        }
        return true;
    }
}