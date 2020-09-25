class BSTIterator2 {
    Stack<TreeNode> stack = new Stack<>();
    TreeNode cur = null;

    public BSTIterator(TreeNode root) {
        cur = root;
    }

    /** @return the next smallest number */
    public int next() {
        int res = -1;
        while (cur != null || !stack.isEmpty()) {
            // 节点不为空一直压栈
            while (cur != null) {
                stack.push(cur);
                cur = cur.left; // 考虑左子树
            }
            // 节点为空，就出栈
            cur = stack.pop();
            res = cur.val;
            // 考虑右子树
            cur = cur.right;
            break;
        }

        return res;
    }

    /** @return whether we have a next smallest number */
    public boolean hasNext() {
        return cur != null || !stack.isEmpty();
    }
}