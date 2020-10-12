class Solution{
        //差值的最小值
        int min = Integer.MAX_VALUE;
        //前一个节点
        TreeNode prev;
    
        public int getMinimumDifference(TreeNode root) {
            inorder(root);
            return min;
        }
    
        public void inorder(TreeNode root) {
            //边界条件判断
            if (root == null)
                return;
            //左子树
            inorder(root.left);
            //对当前节点的操作
            if (prev != null)
                min = Math.min(min, root.val - prev.val);
            prev = root;
            //右子树
            inorder(root.right);
        }

        public int getMinimumDifference(TreeNode root) {
            int min = Integer.MAX_VALUE;
            Stack<TreeNode> stack = new Stack<>();
            TreeNode cur = root, prev = null;
            while (cur != null || !stack.empty()) {
                if (cur != null) {
                    stack.push(cur);
                    cur = cur.left;
                } else {
                    cur = stack.pop();
                    //在这里进行改造
                    if (prev != null)
                        min = Math.min(min, cur.val - prev.val);
                    prev = cur;
                    
                    cur = cur.right;
                }
            }
            return min;
        }
}