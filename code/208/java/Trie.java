class Trie {

    // path：表示当前节点所能链接到其他节点的个数（在删除操作中会用到）
    // end：表示以当前节点为结尾的单词的个数
    // next：HashMap<Character, TrieNode>类型，表示当前节点能链接到的所有节点。
    public class TrieNode{
        public int path;
        public int end;
        public HashMap<Character, TrieNode> next;
    
        public TrieNode(){
            path = 0;
            end = 0;
            next = new HashMap<>();
        }
    }

    /** Initialize your data structure here. */
    private TrieNode root;
    public Trie(){
        root = new TrieNode();
    }
    
    /** Inserts a word into the trie. */
    public void insert(String word){
        if(word == null || word.equals(""))  return ;
        TrieNode node = root;
        for(int i = 0; i<word.length(); i++){
            char ch = word.charAt(i);
            if(!node.next.containsKey(ch)) {
                node.next.put(ch,new TrieNode());
            }
            node = node.next.get(ch);
            node.path++;
        }
        node.end++;
    }
    
    /** Returns if the word is in the trie. */
    public boolean search(String word){
        if(word == null || word.equals("")) return false;
        TrieNode node = root;
        for(int i = 0; i<word.length(); i++){
            char ch = word.charAt(i);
            if(!node.next.containsKey(ch)) return false;
            node = node.next.get(ch);
        }
        if(node.end == 0) return false;
        return true;
    }
    
    /** Returns if there is any word in the trie that starts with the given prefix. */
    public boolean startsWith(String word){
        if(word == null || word.equals("")) return false;
        TrieNode node = root;
        for(int i = 0; i<word.length(); i++){
            char ch = word.charAt(i);
            if(!node.next.containsKey(ch)) return false;
            node = node.next.get(ch);
        }
        return true;
    }

    //path：表示当前节点所能链接到其他节点的个数。
    public void delete(String word){
        if(word == null || word.equals("") || !search(word)) return ;
        TrieNode node = root;
        for (int i = 0; i < word.length(); i++) {
            char ch = word.charAt(i);
            if(--node.next.get(ch).path == 0){
                node.next.remove(ch);
                return;
            }
            node = node.next.get(ch);
        }
        node.end--;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */