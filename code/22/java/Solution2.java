class public Solution2{
    class Node {
        private String res;
        private int left;
        private int right;
        public Node(String str, int left, int right){
            this.res = str;
            this.left = left;
            this.right = right;
        }
    }
    public List<String> generateParenthesis(int n){
        List<String> res = new ArrayList<>();
        if(n === 0){
            return res;
        } 
        Queue<Node> queue = new LinkedList<>();
        queue.offer(new Node("",n,n));
        while(!queue.isEmpty()){
            Node curNode = queue.poll();
            if(curNode.left == 0&& curNode.right ==0){
                res.add(curNode.res);
            }
            if(curNode.left>0){
                queue.offer(new Node(curNode.res + "(" ,curNode.left-1,curNode.right));
            }
            if(curNode.right>0 && curNode.left<curNode.right){
                queue.offer(new Node(curNode.res + " )",curNode.left,curNode.right-1));
            }
            
        }
        return res;
    }
}