var maxDepth = function (root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

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