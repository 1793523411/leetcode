class Solution {
    public boolean isSymmetric(TreeNode root) {
        if(root == null)return true;
        return compare(root.left,root.right);
    }
    private boolean compare(TreeNode A,TreeNode B){
        if(A == null && B ==null) {
            return true;
        }
        if(A == null || B == null){
            return false;
        }
        return A.val == B.val && compare(A.left,B.right) && compare(A.right,B.left);
    }

    //非递归
    public boolean isSymmetric(TreeNode root) {
        //队列
        Queue<TreeNode> queue = new LinkedList<>();
        if (root == null)
            return true;
        //左子节点和右子节点同时入队
        queue.add(root.left);
        queue.add(root.right);
        //如果队列不为空就继续循环
        while (!queue.isEmpty()) {
            //每两个出队
            TreeNode left = queue.poll(), right = queue.poll();
            //如果都为空继续循环
            if (left == null && right == null)
                continue;
            //如果一个为空一个不为空，说明不是对称的，直接返回false
            if (left == null ^ right == null)
                return false;
            //如果这两个值不相同，也不是对称的，直接返回false
            if (left.val != right.val)
                return false;
            //这里要记住入队的顺序，他会每两个两个的出队。
            //左子节点的左子节点和右子节点的右子节点同时
            //入队，因为他俩会同时比较。
            //左子节点的右子节点和右子节点的左子节点同时入队，
            //因为他俩会同时比较
            queue.add(left.left);
            queue.add(right.right);
            queue.add(left.right);
            queue.add(right.left);
        }
        return true;
    }
}