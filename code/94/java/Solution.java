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
    /*递归写法
    public static void inorder(TreeNode root,List<Integer> list){
        if(root == null)
            return ;
        inorder(root.left,list);
        list.add(root.val);
        inorder(root.right,list);
    }
    public List<Integer> inorderTraversal(TreeNode root){
        List<Integer> list = new ArrayList<>();
        inorder(root,list);
        return list;
    }
    */

    //非递归写法
        public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> ans = new ArrayList<>();
        Stack<TreeNode> help = new Stack<>();
        //TreeNode cur = root;
        while(!help.isEmpty() || root != null){
            if(root != null){//操作 1
                help.push(root);
                root = root.left;
            }else{//操作 2
                root = help.pop();
                ans.add(root.val);
                root = root.right;
            }
            
        }
        return ans;

    }
}