/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
    let maxDeep = 0;
    let deep = 0;
    let diff = function (node, deep) {
        if (node === null) {
            return
        }
        deep++
        if (maxDeep < deep) {
            maxDeep = deep
        }
        for (let item in node.children) {
            diff(node.children[item], deep)
        }
        deep--
    }
    diff(root, deep)
    return maxDeep
};

var maxDepth = function (root) {
    if (root === null) {
        return 0
    }
    if (root.children.length === 0) {
        return 1
    }
    let max = 0;
    for (let item in root.children) {
        let childNodeDepth = maxDepth(root.children[item]);
        max = Math.max(max, childNodeDepth)
    }
    return max + 1
};

//一层一层便利
var maxDepth = function (root) {
    if (root === null) {
        return 0
    }
    let queue = [root]
    let leval = 0;
    while (queue.length) {
        let len = queue.length;
        while (len--) {
            let node = queue.shift();
            if (node.children.length > 0) {
                queue = queue.concat(node.children)
            }
        }
        leval++
    }
    return leval
};