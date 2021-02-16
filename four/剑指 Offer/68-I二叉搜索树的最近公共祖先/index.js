var lowestCommonAncestor = function (root, p, q) {
    if (!root) {
        return null;
    }
    if (p.val === q.val) {
        return q;
    }
    while (root) {
        if (root.val < q.val && root.val < p.val) {
            root = root.right;
        }
        if (root.val > q.val && root.val > p.val) {
            root = root.left;
        } else {
            return root;
        }
    }
};

var lowestCommonAncestor = function (root, p, q) {
    if ((root.val - p.val) * (root.val - q.val) <= 0) return root;
    if (p.val < root.val) return lowestCommonAncestor(root.left, p, q);
    return lowestCommonAncestor(root.right, p, q);
};