//!困难

var findWords = function (board, words) {
    /**
     * build trie --> traverse board --> DFS
     */
    let res = [], row = board.length, col = board[0].length
    // 构建 tire
    const getTrie = words => {
        let root = Object.create(null)
        for (let word of words) {
            let node = root
            for (let c of word) {
                if (!node[c]) node[c] = Object.create(null)
                node = node[c]
            }
            node.word = word
        }
        return root
    }

    // DFS 深度优先搜素
    const search = (trie, x, y) => {
        if (trie.word) {
            res.push(trie.word)
            trie.word = null // make sure only print one time for each word
        }

        // handle board boundary
        if (x < 0 || y < 0 || y >= row || x >= col) return

        // can't find board[y][x]
        if (!trie[board[y][x]]) return

        let prefixChar = board[y][x]
        board[y][x] = "#" // mark visited
        search(trie[prefixChar], x, y - 1)
        search(trie[prefixChar], x, y + 1)
        search(trie[prefixChar], x - 1, y)
        search(trie[prefixChar], x + 1, y)
        board[y][x] = prefixChar // restore
    }

    // traverse board
    let trie = getTrie(words)
    for (let y = 0; y < row; y++) {
        for (let x = 0; x < col; x++) {
            search(trie, x, y)
        }
    }
    return res
};
