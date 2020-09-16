class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        if (root == null) return new ArrayList<Integer>();
        
        TreeNode node = root;
        List<Integer> ret = new ArrayList<Integer>();
        
        Stack<TreeNode> stack = new Stack<TreeNode>();
        while(node != null || !stack.isEmpty()) {
            while (node != null) {
                stack.push(node);
                node = node.left;
            }
            node = stack.pop();
            // 后序遍历
            // 如果没有右孩子或者右孩子被访问过了 {@Alex Zheng 感谢建议哈～}
            if (node.right == null || 
                    (ret.size() != 0 && ret.get(ret.size() - 1).equals(node.right.val)) ) {
                ret.add(node.val);
                node = null;
            }  else {
                stack.push(node);
                node = node.right;
            }
        }
        return ret;
    }
}

