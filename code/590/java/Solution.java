class Solution{
    List<Integer> res = new ArrayList<Integer>();
    public List<Integer> postorder(Node root) {
        helper(root);
        return res;
    }
    public void helper(Node root) {
        if(root == null) {
            return;
        }
        int s = root.children.size();
        for(int i = 0; i < s; i++) {
            helper(root.children.get(i));
        }
        //与前序遍历只是位置变了而已
        res.add(root.val);
    }

    public List<Integer> postorder2(Node root){
		Stack<Node> s = new Stack<>();
		List<Integer> result = new LinkedList<>();
		Node top;
		int i,len;
		if(root==null)return result;
		s.push(root);
		while(!s.isEmpty()){
			top = s.pop();
			len = top.children.size();
			//根
			//每次向结果链表的第一个位置添加，之前的所有数组元素后移
			//与逆序输出结果相同
			result.add(0,top.val);
			//从右至左遍历
			//模拟一下栈的进出过程就知道为什么是从右至左了
			for(i=0;i<len;i++){
				s.push(top.children.get(i));
			}
		}
		return result;
	}
}