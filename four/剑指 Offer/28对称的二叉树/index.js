var isSymmetric = function (root) {
    if(!root) return true
    function isMirror(r1, r2) {
        if (!r1 && !r2) return true
        if (!r1 || !r2) return false

        return r1.val === r2.val && isMirror(r1.left, r2.right) && isMirror(r1.right, r2.left)
    }

    return isMirror(root.left, root.right)
};





var isSymmetric = function (root) {
    return JSON.stringify(root) === JSON.stringify(mirrorTree(root));
};

var mirrorTree = function (root) {
    if (!root) return null;
    [root.left, root.right] = [mirrorTree(root.right), mirrorTree(root.left)];
    return root
};