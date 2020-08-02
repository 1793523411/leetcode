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
//莫里斯遍历，以前没见过这种方法，这种方法效率最搞，故时间复杂度为O(n)，空间复杂度:O(1)，下面留个链接，哈哈哈
    public List<Integer> inorderTraversal(TreeNode root) {
		List<Integer> res = new ArrayList<Integer>();
		TreeNode pre = null;
		while(root!=null) {
			//如果左节点不为空，就将当前节点连带右子树全部挂到
			//左节点的最右子树下面
			if(root.left!=null) {
				pre = root.left;
				while(pre.right!=null) {
					pre = pre.right;
				}
				pre.right = root;
				//将root指向root的left
				TreeNode tmp = root;
				root = root.left;
				tmp.left = null;
			//左子树为空，则打印这个节点，并向右边遍历	
			} else {
				res.add(root.val);
				root = root.right;
			}
		}
		return res;
	}

//链接：https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/dong-hua-yan-shi-94-er-cha-shu-de-zhong-xu-bian-li/

}