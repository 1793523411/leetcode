/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = (root) => {
    const queue = [root];
    let res = [];
    while (queue.length) {
        const node = queue.shift(); // 考察出列的节点
        if (node) {                 // 是真实节点，带出子节点入列
            res.push(node.val);       // 节点值推入res
            queue.push(node.left);    // 子节点入列，不管是不是null节点都入列
            queue.push(node.right);
        } else {                    // 是null节点，没有子节点入列
            res.push('X');            // X 推入res
        }
    }
    return res.join(',');  // 转成字符串
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = (data) => {
    if (data == 'X') return null;

    const list = data.split(',');  // 序列化字符串split成数组

    const root = new TreeNode(list[0]); // 获取首项，构建根节点
    const queue = [root];          // 根节点推入队列
    let cursor = 1;                // 初始指向list第二项

    while (cursor < list.length) { // 指针越界，即扫完了序列化字符串
        const node = queue.shift();  // 考察出列的节点

        const leftVal = list[cursor];      // 它的左儿子的值
        const rightVal = list[cursor + 1]; // 它的右儿子的值

        if (leftVal != 'X') {              // 是真实节点
            const leftNode = new TreeNode(leftVal); // 创建左儿子节点
            node.left = leftNode;                   // 认父亲
            queue.push(leftNode);                   // 自己也是父亲，入列
        }
        if (rightVal != 'X') {
            const rightNode = new TreeNode(rightVal);
            node.right = rightNode;
            queue.push(rightNode);
        }
        cursor += 2; // 一次考察一对儿子，指针加2
    }
    return root;  // BFS结束，构建结束，返回根节点
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */