+ 思路：

    根据平衡性的定义，计算每个节点的左右子树高度。
    如果某个节点的左右子树高度差大于1，则不平衡，返回false，算法结束；否则说明以当前节点为根的子树是平衡的，继续检查当前节点的左右子树的平衡性。

+ 计算二叉树的高度：

    递归，分解问题，
    当前二叉树的高度 = max(左子树高度,右子树高度) + 1
    左子树高度的计算方法和第1步相同
    若当前节点为null，返回0，作为递归出口
    按照以上分解方法可以到达递归出口


```java
class Solution {
    public boolean isBalanced(TreeNode root) {
        if(root == null) return true;
        return isBalanced(root.left) && isBalanced(root.right) && (Math.abs(depth(root.left)-depth(root.right)) <= 1);
    }
    private int depth(TreeNode root){
        return root == null ? 0 : (Math.max(depth(root.left),depth(root.right))+1);
    }
}

class Solution {
    public boolean isBalanced(TreeNode root) {
        if(root == null) return true;
        return isBalanced(root.left) && isBalanced(root.right) && (Math.abs(depth(root.left)-depth(root.right)) <= 1);
    }
    private int depth(TreeNode root){
        return root == null ? 0 : (Math.max(depth(root.left),depth(root.right))+1);
    }
}
```