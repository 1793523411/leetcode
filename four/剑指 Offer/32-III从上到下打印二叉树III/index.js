var levelOrder = function(root) {
    if (!root) return [];
    const queue = [root];
    const res = [];
    let level = 0; // 代表当前层数
    while (queue.length) {
        res[level] = []; // 第level层的遍历结果

        let levelNum = queue.length; // 第level层的节点数量
        while (levelNum--) {
            const front = queue.shift();
            res[level].push(front.val);
            if (front.left) queue.push(front.left);
            if (front.right) queue.push(front.right);
        }
        // 行号是偶数时，翻转当前层的遍历结果
        if (level % 2) {
            res[level].reverse();
        }

        level++;
    }
    return res;
};