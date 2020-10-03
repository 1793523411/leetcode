/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public boolean isBalanced(TreeNode root) {
        // 空树认为是平衡的
        if (root == null) {
            return true;
        }
        
        int leftTreeDepth = treeDepth(root.left);   // 左子树高度
        int rigthTreeDepth = treeDepth(root.right); // 右子树高度

        // 以当前结点为根的树是不平衡的
        if (Math.abs(leftTreeDepth - rigthTreeDepth) > 1) {
            return false;
        }

        // 以当前结点为根的树是平衡的，继续递归检测其左右子树的平衡性 
        return isBalanced(root.left) && isBalanced(root.right);
    }

    // 递归计算以root为根的树的高度
    public int treeDepth(TreeNode root) {
        // 空树的高度为0
        if (root == null) {
            return 0;
        }
        // 二叉树的高度为左子树高度和右子树高度两者中的较大者 + 1
        return Math.max(treeDepth(root.left), treeDepth(root.right)) + 1;
    }
}
