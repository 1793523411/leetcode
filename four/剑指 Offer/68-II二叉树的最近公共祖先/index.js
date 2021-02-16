var lowestCommonAncestor = function (root, p, q) {
    let ret = null;
    function recur(curNode, p, q) {
        if (curNode === null) return 0;
        let l = recur(curNode.left, p, q);
        let r = recur(curNode.right, p, q);
        let v = curNode === p || curNode === q ? 1 : 0;
        v = v + l + r;
        if (v === 2 && ret === null) {
            ret = curNode;
        }
        return v;
    }
    recur(root, p, q);
    return ret;
};

var lowestCommonAncestor = function (root, p, q) {
    if (root == null) {
        return root;
    }
    if (root == p || root == q) {
        return root;
    }
    let r1 = lowestCommonAncestor(root.right, p, q); //求解所有可能的子问题
    let r2 = lowestCommonAncestor(root.left, p, q); //求解所有可能的子问题
    if (r1 && r2) {
        //都不为空 每个都找到了 返回根节点
        return root;
    }
    if (r1) {
        return r1;
    }
    if (r2) {
        return r2;
    }
};