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

class Solution {
    //BFS
    public int maxDepth(Node root) {
        if(root == null){
            return 0;
        }
        int depth = 0;
        Queue<Node> queue = new LinkedList<>();
        queue.offer(root);
        while(!queue.isEmpty()){
            int size = queue.size();
            for(int i=0; i<size; i++){
                Node node = queue.poll();
                for(Node n : node.children){
                    queue.offer(n);
                }
            }
            depth++;
        }
        return depth;
    }
    //DFS
    public int maxDepth2(Node root) {
        if (root == null) return 0;
        int max = 0;
        for (Node child : root.children) max = Math.max(max, maxDepth(child));
        return max + 1;
    }
}