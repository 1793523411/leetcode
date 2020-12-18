/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
//BFS
var levelOrder = function (root) {
    if (!root) return [];
    let queue = [root];
    let res = []
    while (queue.length > 0) {
        let len = queue.length;
        let arr = [];
        while (len) {
            let node = queue.shift();
            arr.push(node.val);
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
            len--
        }
        res.push(arr)
    }
    return res
};

var levelOrder = function (root) {
    if (!root) return [];
    let res = [];
    dfs(root, 0, res)
    return res
};

function dfs(root, step, res) {
    if (root) {
        if (!res[step]) res[step] = [];
        res[step].push(root.val)
        dfs(root.left, step + 1, res)
        dfs(root.right, step + 1, res)
    }
}