/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
    const len = s.length;
    const wordSet = new Set(wordDict);

    const canBreak = (start) => { // 判断从start到末尾的子串能否break
        if (start == len) { // 指针越界，s都划分成单词了才走到这步的，没有剩余子串了，返回真，结束递归
            return true;
        }
        for (let i = start + 1; i <= len; i++) {    // 指针i 去划分两部分
            const prefix = s.slice(start, i);         // 前缀部分
            if (wordSet.has(prefix) && canBreak(i)) { // 如果前缀部分是单词，且剩余子串能break，返回真
                return true;
            }           // 如果前缀部分不是单词，则不会执行canBreak(i)，进入下一轮迭代，再切出一个前缀串
        }
        return false; // 指针i怎么划分，都没有返回true，则返回false
    }
    return canBreak(0); // 递归的入口，从索引0开始
}

//上面那个超时了，所以要加入记忆优化
const wordBreak = (s, wordDict) => {
    const wordSet = new Set(wordDict);
    const len = s.length;
    const queue = [];
    queue.push(0);

    while (queue.length) {
        const start = queue.shift(); // 考察出列的指针
        for (let i = start + 1; i <= len; i++) { // i指针去划分两部分
            const prefix = s.slice(start, i);      // 切出前缀部分
            if (wordSet.has(prefix)) { // 前缀部分是单词
                if (i < len) {           // i还没越界，还能继续划分，让它入列，作为下一层待考察的节点
                    queue.push(i);
                } else { // i==len，指针越界，说明s串一路被切出单词，现在没有剩余子串，不用划分，返回true
                    return true;
                }
            }    // 前缀部分不是单词，划不出单词的i指针不入列，继续下轮迭代，切出下一个前缀部分
        }
    }
    return false; // BFS完所有节点（考察了所有划分的可能）都没返回true，则返回false
};

//依然超时
const wordBreak = (s, wordDict) => {
    const wordSet = new Set(wordDict);
    const len = s.length;
    const visited = new Array(len);

    const queue = [];
    queue.push(0);

    while (queue.length) {
        const start = queue.shift();  // 考察出列的指针
        if (visited[start]) continue; // 是访问过的，跳过
        visited[start] = true;        // 未访问过的，记录一下

        for (let i = start + 1; i <= len; i++) { // 用指针i去划分两部分
            const prefix = s.slice(start, i);      // 前缀部分
            if (wordSet.has(prefix)) {  // 前缀部分是单词
                if (i < len) {            // i还没越界，还能继续划分，让它入列，作为下一层待考察的节点
                    queue.push(i);
                } else {  // i==len，指针越界，说明s串一路被切出单词，现在没有剩余子串，不用划分，返回true
                    return true;
                }
            }       // 前缀部分不是单词，划分不出单词的i指针，不入列，继续下轮迭代，切出下一个前缀部分
        }
    }
    return false; // BFS完所有节点（考察了所有划分的可能）都没返回true，则返回false
};


// -----------------动态规划------------------
const wordBreak = (s, wordDict) => {
    const wordSet = new Set(wordDict);
    const len = s.length;
    const dp = new Array(len + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= len; i++) {
        for (let j = i - 1; j >= 0; j--) {    // j去划分成两部分
            const suffix = s.slice(j, i);       // 后缀部分 s[j: i-1]
            if (wordSet.has(suffix) && dp[j]) { // 后缀部分是单词，且左侧子串[0,j-1]的dp[j]为真
                dp[i] = true;
                break;  // dp[i] = true了，i长度的子串已经可以拆成单词了，不需要j继续划分子串了
            }
        }
    }
    return dp[len];
};

var wordBreak = function (s, wordDict) {
    const wordSet = new Set(wordDict);
    const len = s.length;
    const dp = new Array(len + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= len; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (dp[i] == true) break;
            if (dp[j] == false) continue;
            const suffix = s.slice(j, i);
            if (wordSet.has(suffix) && dp[j] == true) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
};
