var kthLargest = function(root, k) {
    let setArray = new Set()
    const dfs = function(node) {
        if (node === null) {
            return
        }
        setArray.add(node.val)
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    let array = [...setArray]
    array.sort((a,b) => {
        return b - a
    })
    return array[k - 1]
};

var kthLargest = function(root, k) {
    // 反中序遍历，记录数值到数组，获取第k -1 个
    let setArray = []
    const dfs = function(node) {
        if (node === null) {
            return
        }
        dfs(node.right)
        setArray.push(node.val)
        dfs(node.left)
    }
    dfs(root)
    return setArray[k - 1]
};


var kthLargest = function(root, k) {
    // 反中序遍历，记录数值第k个值返回
    let num = 0
    let result = null
    const dfs = function(node) {
        if (node === null) {
            return
        }
        dfs(node.right)
        num++
        if (num === k) {
            result = node.val
            return
        }
        dfs(node.left)
    }
    dfs(root)
    return result
};