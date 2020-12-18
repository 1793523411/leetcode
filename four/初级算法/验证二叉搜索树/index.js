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
 * @return {boolean}
 */

//中序遍历就排好序了
var isValidBST = function (root) {
    const queue = [];
    function dfs(root){
        if(!root){
            return;
        }
        root.left && dfs(root.left);
        queue.push(root.val)
        root.right && dfs(root.right)
    }

    dfs(root)

    for(let i = 0 ; i <queue.length - 1;i++){
        if(queue[i] >= queue[i+1]){
            return false
        }
    }
    return true
};

//在中序遍历中比较大小
var isValidBST = function(root) {
    let stack = [];
    let inorder = -Infinity;

    while (stack.length || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
        if (root.val <= inorder) {
            return false;
        }
        inorder = root.val;
        root = root.right;
    }
    return true;
};


var isValidBST = function (root, pre = null, next = null) {
    if(!root) return true
    if(pre && pre.val >= root.val) return false
    if(next && next.val <= root.val) return false
    return isValidBST(root.left,pre,root) && isValidBST(root.right,root,next)
};