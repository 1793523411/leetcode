/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//递归 DFS
var maxDepth = function (root) {
    if (!root) {
        return 0
    }
    return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1)
};

//BFS
var maxDepth = function (root) {
    if (!root) {
        return 0
    }
    let depth = 0;
    let bfs = [root]
    while (bfs.length) {
        depth++;
        const tempBfs = []

        for (let i = 0; i < bfs.length; i++) {
            if (bfs[i].left) {
                tempBfs.push(bfs[i].left)
            }
            if (bfs[i].right) {
                tempBfs.push(bfs[i].right)
            }
        }

        bfs = tempBfs;
    }
    return depth
};