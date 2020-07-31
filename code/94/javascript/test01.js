/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = (root) => {
    let result = []
    var inorderTraversal = (node) => {
        if(node) {
            inorderTraversal(node.left)
            result.push(node.val)
            inorderTraversal(node.right)
        }
    }
    inorderTraversal(root)
    return result
}