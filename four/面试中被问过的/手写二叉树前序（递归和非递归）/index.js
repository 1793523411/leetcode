/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//递归
var preorderTraversal = (root) => {
    let result = []
    let preOrderTraverseNode = (node) => {
        if (node) {
            result.push(node.val)
            preOrderTraverseNode(node.left)
            preOrderTraverseNode(node.right)
        }
    }
    preOrderTraverseNode(root)
    return result
}

//非递归
var preorderTraversal = (root) => {
    const list = []
    const stack = []
    if (root) stack.push(root)
    while (stack.length > 0) {
        const curNode = stack.pop()
        list.push(curNode.val)
        if (curNode.right != null) {
            stack.push(curNode.right)
        }
        if (curNode.left != null) {
            stack.push(curNode.left)
        }
    }
    return list;
}