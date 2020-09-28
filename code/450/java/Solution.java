class Solution {
    public TreeNode deleteNode(TreeNode root, int key) {
        if(root == null){
            return null;
        }
        //当前节点值比key小，则需要删除当前节点的左子树中key对应的值，并保证二叉搜索树的性质不变
        if(key < root.val){
            root.left = deleteNode(root.left,key);
        }
        //当前节点值比key大，则需要删除当前节点的右子树中key对应的值，并保证二叉搜索树的性质不变
        else if(key > root.val){
            root.right = deleteNode(root.right,key);
        }
        //当前节点等于key，则需要删除当前节点，并保证二叉搜索树的性质不变
        else{
            //当前节点没有左子树
            if(root.left == null){
                return root.right;
            }
            //当前节点没有右子树
            else if(root.right == null){
                return root.left;
            }
            //当前节点既有左子树又有右子树
            else{
                TreeNode node = root.right;
                //找到当前节点右子树最左边的叶子结点
                while(node.left != null){
                    node = node.left;
                }
                //将root的左子树放到root的右子树的最下面的左叶子节点的左子树上
                node.left = root.left;
                return root.right;
            }
        }
        return root;
    }
}