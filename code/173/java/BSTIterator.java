class BSTIterator {

    Queue<Integer> queue = new LinkedList<>();

    public BSTIterator(TreeNode root) {
        inorderTraversal(root);
    }

    private void inorderTraversal(TreeNode root) {
        if (root == null) {
            return;
        }
        inorderTraversal(root.left);
        queue.offer(root.val);
        inorderTraversal(root.right);
    }

    /** @return the next smallest number */
    public int next() {
        return queue.poll();
    }

    /** @return whether we have a next smallest number */
    public boolean hasNext() {
        return !queue.isEmpty();
    }

//     解法一中我们把所有节点都保存了起来，其实没必要一次性保存所有节点，而是需要一个输出一个即可。

// 所以我们要控制中序遍历的进程，不要让它一次性结束，如果用解法一递归的方法去遍历那就很难控制了，所以自然而然的会想到用栈模拟递归的过程。

    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> ans = new ArrayList<>();
        Stack<TreeNode> stack = new Stack<>();
        TreeNode cur = root;
        while (cur != null || !stack.isEmpty()) {
            //节点不为空一直压栈
            while (cur != null) {
                stack.push(cur);
                cur = cur.left; //考虑左子树
            }
            //节点为空，就出栈
            cur = stack.pop();
            //当前值加入
            ans.add(cur.val);
            //考虑右子树
            cur = cur.right;
        }
        return ans;
    }


}