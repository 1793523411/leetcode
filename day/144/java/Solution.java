/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        if (root == null) {
            return result;
        }

        Stack<TreeNode> stack = new Stack<>();  // 用于存储 每颗树 的 “根节点”
        TreeNode curNode = root;
        while (curNode != null || !stack.isEmpty()) {
            /*
                一直 遍历左子树，每次遍历时，记录当前节点的 val，直至 左子树为 null，则 当前根的左子树遍历完毕
             */
            while (curNode != null) {
                result.add(curNode.val);
                stack.push(curNode);
                curNode = curNode.left;
            }

            /*
                当前 左子树遍历完毕，退回（回溯）当前根节点，将当前节点指向 当前根节点的 右子树节点，遍历右子树
             */
            curNode = stack.pop();
            curNode = curNode.right;
        }

        return result;
    }
}