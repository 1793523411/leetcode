/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/

//递归
class Solution {
    private List<Integer> res;
    public List<Integer> preorder(Node root) {
        res = new LinkedList<>();
        dfs(root);
        return res;
    }
    private void dfs(Node root) {
        if(root == null)    return;
        res.add(root.val);
        for(var child : root.children)
            dfs(child);
    }

    class Solution2 {
        public List<Integer> preorder(Node root) {
            List<Integer> res = new LinkedList<>();
            if(root == null)    return res;
            Stack<Node>  stack = new Stack<>();
            stack.push(root);
            while(!stack.isEmpty()) 
            {
                Node cur = stack.pop();
                res.add(cur.val);
                for(int i = cur.children.size()-1; i >= 0; i--)
                    stack.push(cur.children.get(i));
            }
            return res;
        }
    }
}
