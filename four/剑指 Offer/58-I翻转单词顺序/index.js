var reverseWords = function (s) {
    return s.trim().split(/\s+/).reverse().join(" ");
};



var reverseWords = function (s) {
    const sLength = s.length
    // 声明 newString 存放新字符串
    let newString = ''
    // 存储单词
    let word = ''
    // 遍历字符串
    for (let i = 0; i < sLength; i++) {
        if (s[i].includes(' ')) {
            // 如果当前字符是空格 跳出循环
            continue
        }
        else {
            // 如果不是空格，将当前字符存入 word
            word += s[i]
        }
        if (!s[i + 1] || s[i + 1].includes(' ')) {
            // 如果 s[i + 1] 不存在或者 s[i + 1] 为空格，将 word 存入当前字符串
            // s[i+1] 不存在，代表字符串遍历结束
            // s[i+1] 为空格，代表当前单词遍历结束
            newString = word + ' ' + newString
            word = ''
        }
    }
    return newString.slice(0, -1)
};