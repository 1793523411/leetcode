var pathSum = function (root, sum) {
    var res = [], stack = [];
    function dfs(r, sum) {
        if (r == null) return;
        sum -= r.val;
        stack.push(r.val);
        if (r.left == null && r.right == null && sum == 0) res.push([...stack]);
        dfs(r.left, sum);
        dfs(r.right, sum);
        stack.pop();
    }
    dfs(root, sum);
    return res
};


var pathSum = function (root, sum) {
    if (!root) {
        return [];
    }

    const statck = [[root, sum, [root.val]]];
    const result = [];

    while (statck.length) {
        const [node, num, path] = statck.pop();

        if (!node.left && !node.right && node.val === num) {
            result.push(path);
        }

        if (node.right) {
            statck.push([
                node.right,
                num - node.val,
                [...path, node.right.val]
            ]);
        }
        if (node.left) {
            statck.push([node.left, num - node.val, [...path, node.left.val]]);
        }
    }

    return result;
};