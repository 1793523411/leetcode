class Solution2 {
    private Node root;
    public List<List<Integer>> palindromePairs(String[] words) {
        this.root = new Node();
        int n = words.length;
        // 字典树的插入，注意维护每个节点上的两个列表
        for (int i = 0; i < n; i++) {
            String rev = new StringBuilder(words[i]).reverse().toString();
            Node cur = root;
            if (isPalindrome(rev.substring(0))) cur.suffixs.add(i);
            for (int j = 0; j < rev.length(); j++) {
                char ch = rev.charAt(j);
                if (cur.children[ch-'a']==null) cur.children[ch-'a'] = new Node();
                cur = cur.children[ch-'a'];
                if (isPalindrome(rev.substring(j+1))) cur.suffixs.add(i);
            }
            cur.words.add(i);
        }
        // 用以存放答案的列表
        List<List<Integer>> ans = new ArrayList<>();
        
        for (int i = 0; i < n; i++) {
            String word = words[i];
            Node cur = root;
            int j = 0;
            for ( ;j < word.length(); j++) {
                // 到j位置，后续字符串若是回文对，则在该节点位置上所有单词都可以与words[i]构成回文对
                // 因为我们插入的时候是用每个单词的逆序插入的:)
                if(isPalindrome(word.substring(j))) 
                    for (int k : cur.words) 
                        if (k != i) ans.add(Arrays.asList(i,k));
                
                char ch = word.charAt(j);
                if (cur.children[ch-'a'] == null) break;
                cur = cur.children[ch-'a'];

            }
            // words[i]遍历完了，现在找所有大于words[i]长度且符合要求的单词，suffixs列表就派上用场了:)
            if (j == word.length()) 
                for (int k : cur.suffixs) 
                    if (k != i) ans.add(Arrays.asList(i,k));
            
        }
        return ans;
        
    }
    //  判断一个字符串是否是回文字符串
    private boolean isPalindrome(String w) {
        int i = 0, j = w.length()-1;
        while (i < j) {
            if (w.charAt(i) != w.charAt(j)) return false;
            i++; j--;
        }
        return true;
    }
}
class Node {
    public Node[] children;
    public List<Integer> words;
    public List<Integer> suffixs;
    public Node() {
        this.children = new Node[26];
        this.words = new ArrayList<>();
        this.suffixs = new ArrayList<>();
    }
}