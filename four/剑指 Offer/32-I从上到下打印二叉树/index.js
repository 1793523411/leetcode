var levelOrder = function(root) {
    if (!root) {
        return [];
    }

    const data = [];
    const queue = [root];
    while (queue.length) {
        const first = queue.shift();
        data.push(first.val);
        first.left && queue.push(first.left);
        first.right && queue.push(first.right);
    }

    return data;
};