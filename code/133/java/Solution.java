class Solution {
    //DFS
        public Node cloneGraph(Node node) {
            Map<Node, Node> lookup = new HashMap<>();
            return dfs(node, lookup);
        }
    
        private Node dfs(Node node, Map<Node,Node> lookup) {
            if (node == null) return null;
            if (lookup.containsKey(node)) return lookup.get(node);
            Node clone = new Node(node.val, new ArrayList<>());
            lookup.put(node, clone);
            for (Node n : node.neighbors)clone.neighbors.add(dfs(n,lookup));
            return clone;
        }
    
}