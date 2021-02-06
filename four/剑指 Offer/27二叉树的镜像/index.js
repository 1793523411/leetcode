var mirrorTree = function (root) {
    if (!root) return null;
    [root.left, root.right] = [mirrorTree(root.right), mirrorTree(root.left)];
    return root
};


var mirrorTree = function (root) {
    if (!root) {
        return null;
    }
    // 交换当前节点的左右节点
    const leftCopy = root.left;
    root.left = root.right;
    root.right = leftCopy;

    // 对左右子树做相同操作
    mirrorTree(root.left);
    mirrorTree(root.right);

    return root;
};

var mirrorTree = function (root) {
    var json = JSON.stringify(root)
    json = json.replace(/left/g, 'left1')
    json = json.replace(/right/g, 'left')
    json = json.replace(/left1/g, 'right')
    return JSON.parse(json)
};

var mirrorTree = function (root) {
    if (!root) return root
    let queue = [root]
    while (queue.length) {
        const stack = []
        for (let node of queue) {
            [node.left, node.right] = [node.right, node.left]
            node.left && stack.push(node.left)
            node.right && stack.push(node.right)
        }
        queue = stack
    }
    return root
};
