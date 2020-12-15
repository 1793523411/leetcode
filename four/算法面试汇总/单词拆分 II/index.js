//!困难

function wordBreak(s, wordDict) {
    const len = s.length;
    const dict = new Set(wordDict); // 单词表的hashSet

    function dfs(start) {
        if (start > s.length - 1) { // 指针越界，剩余子串是空串，划分不出东西，返回[[]]
            return [[]];
        }
        const res = [];
        for (let i = start + 1; i <= len; i++) {
            const word = s.substring(start, i); // 切出一个子串，看看是不是单词
            if (dict.has(word)) {     // 如果是单词，对剩余子串继续划分
                const restRes = dfs(i); // restRes是剩余子串返回出的结果数组
                for (const restWords of restRes) { // 遍历剩余子串返回出的结果数组
                    res.push([word].concat(restWords)); // 把word和每个子数组拼接，然后推入res
                }
            }
        }
        return res;
    }

    return dfs(0).map((words) => { // 子数组转成" "连接的字符串
        return words.join(' ');
    });
}

//上面超时
function wordBreak(s, wordDict) {
    const len = s.length;
    const dict = new Set(wordDict);
    const memo = new Array(len);

    function dfs(start) {
        if (memo[start]) {
            return memo[start];
        }
        if (start > s.length - 1) {
            return [[]];
        }
        const res = [];
        for (let i = start + 1; i <= len; i++) {
            const word = s.substring(start, i);
            if (dict.has(word)) {
                const restRes = dfs(i);
                for (const restWords of restRes) {
                    res.push([word].concat(restWords));
                }
            }
        }
        memo[start] = res;
        return res;
    }
    return dfs(0).map((words) => {
        return words.join(' ');
    });
}
