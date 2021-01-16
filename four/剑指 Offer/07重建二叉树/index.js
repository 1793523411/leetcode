/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
//递归分治
var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null
    }
    const rootVal = preorder[0]
    const node = new TreeNode(rootVal)

    let i = 0;
    for (; i < inorder.length; i++) {
        if (inorder[i] == rootVal) {
            break
        }
    }
    node.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
    node.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));
    return node
};