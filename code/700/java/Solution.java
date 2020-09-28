class Solution {
    //递归 
public TreeNode searchBST(TreeNode root, int val) { 
    if (root == null) 
        return null; 
    if (root.val > val) { 
        return searchBST(root.left, val);    
    } else if (root.val < val) {
        return searchBST(root.right, val);
    } else {
        return root;
    }
}
//迭代
public TreeNode searchBST(TreeNode root, int val) {
        while (root != null) {
            if (root.val == val) {
                return root;
            } else if (root.val > val) {
                root = root.left;
            } else {
                root = root.right;
            }
        }
        return null;
 }
}