/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    // 约定空树不是任意一个树的子结构
    if(!A || !B) {
        return false;
    }
    return isSameTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSameTree = function(A, B) {
    // B子树是空子树 ok
    if(!B) {
        return true;
    }
    // A子树是空子树 且 B 非空，不 ok
    if(!A) {
        return false;
    }
    // 当前节点的值不相等，不 ok
    if(A.val !== B.val) {
        return false;
    }
    // 递归考察左子树、右子树
    return isSameTree(A.left, B.left) && isSameTree(A.right, B.right);
};