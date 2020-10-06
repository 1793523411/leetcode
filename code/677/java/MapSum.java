class MapSum {

    // 创建字典树节点类
    private class Node{

        public int value;
        public HashMap<Character, Node> next;

        public Node(int value)
        {
            this.value = value;
            this.next = new HashMap<>();
        }

        public Node(){
            this(0);
        }

    }

    private Node root;

    /** Initialize your data structure here. */
    public MapSum() {
        root = new Node();
    }
    
    public void insert(String key, int val) {
        Node curr = root;
        for(int i = 0; i < key.length(); i++)
        {
            char c = key.charAt(i);
            if(curr.next.get(c) == null)
                curr.next.put(c, new Node());
            curr = curr.next.get(c);
        }
        curr.value = val;
    }
    
    public int sum(String prefix) {
        Node curr = root;
        for(int i = 0; i < prefix.length(); i++)
        {
            char c = prefix.charAt(i);
            if(curr.next.get(c) == null)
                return 0;
            curr = curr.next.get(c);
        }

        return sum(curr);
    }

    private int sum(Node node)
    {
        int res = node.value;
        for(char c : node.next.keySet())
            res += sum(node.next.get(c));

        return res;
    }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * MapSum obj = new MapSum();
 * obj.insert(key,val);
 * int param_2 = obj.sum(prefix);
 */