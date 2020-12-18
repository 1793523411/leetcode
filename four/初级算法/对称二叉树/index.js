/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    let q = [root, root], n, m;
    while (q.length) {
        n = q.shift(), m = q.shift();
        if (!m && !n) continue;
        if (!m || !n || m.val !== n.val) return false;
        q.push(n.left, m.right, n.right, m.left)
    }
    return true
};

//模拟栈
var isSymmetric = function (root) {
    if (!root) return true;
    let stack = [root.left, root.right];
    while (stack.length) {
        let right = stack.pop();
        let left = stack.pop()
        if (left && right) {
            if (left.val !== right.val) return false;
            stack.push(left.left)
            stack.push(right.right)
            stack.push(left.right);
            stack.push(right.left)
        } else if (left || right) {
            return false
        }
    }
    return true
};