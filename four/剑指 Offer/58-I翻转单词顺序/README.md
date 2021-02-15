# 翻转单词顺序

```
输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。

 

示例 1：

输入: "the sky is blue"
输出: "blue is sky the"
示例 2：

输入: "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
示例 3：

输入: "a good   example"
输出: "example good a"
解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
 

说明：

无空格字符构成一个单词。
输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
```

## js API 一行解决

```js
var reverseWords = function (s) {
  return s
    .trim()
    .split(" ")
    .filter((item) => item != "")
    .reverse()
    .join(" ");
};
```

## 使用正则

```js
var reverseWords = function (s) {
  let res = "";
  s.replace(/\S{1,}/g, (x) => {
    res = x + " " + res;
  });
  return res.trim();
};
```

## 一行-正则-100%
```js
var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(" ");
};
```

## 不调用API

```js
var reverseWords = function(s) {
    const sLength = s.length
    // 声明 newString 存放新字符串
    let newString = ''
    // 存储单词
    let word = ''
    // 遍历字符串
    for(let i = 0; i < sLength; i ++){
        if(s[i].includes(' ')){
            // 如果当前字符是空格 跳出循环
            continue
        }
        else{
            // 如果不是空格，将当前字符存入 word
            word += s[i]
        }
        if(!s[i + 1] || s[i + 1].includes(' ')){
            // 如果 s[i + 1] 不存在或者 s[i + 1] 为空格，将 word 存入当前字符串
            // s[i+1] 不存在，代表字符串遍历结束
            // s[i+1] 为空格，代表当前单词遍历结束
            newString = word + ' ' + newString
            word = ''
        }
    }
    return newString.slice(0, -1)
};
```