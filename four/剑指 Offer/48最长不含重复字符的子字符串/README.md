# 最长不含重复字符的子字符串

```
请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

 

示例 1:

输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

## 拼接截取字符串

```js
var lengthOfLongestSubstring = function (s) {
  const len = s.length;
  let res = 0;
  let temp = "";
  for (let i = 0; i < len; i++) {
    if (temp.indexOf(s[i]) === -1) {
      temp += s[i];
      res = Math.max(res, temp.length);
    } else {
      temp = temp.slice(temp.indexOf(s[i]) + 1);
      temp += s[i];
    }
  }
  return res;
};
```

## 滑动窗口

如果 s 的长度小于等于 1，直接返回长度；

初始化最大值 max = 1；

使用 head 指针指向位置 0，tail 指针指向位置 1：

若 s 的 head 到 tail 前的字符中存在 tail，则将 head 指针移动到该滑动窗口中重复 tail 的位置后面一位，tail 往后移动一位；

若不存在，则 tail 往后移动一位，这里的 tail 移动后肯定比前一步 tail 移动的长度大，所以在这里设置与 max 比较。

直到 tail 跑到 s 外面，循环结束


**使用 indexof 来代替哈希**

```js
var lengthOfLongestSubstring = function (s) {
  let max = 1;
  let len = s.length;
  if (len <= 1) {
    return len;
  }
  let head = 0,
    tail = 1,
    index = -1;
  while (tail < len) {
    index = s.substring(head, tail).indexOf(s[tail]);
    if (index != -1 && head < tail) {
      head += index + 1;
      tail++;
    } else {
      tail++;
      if (tail - head > max) {
        max = tail - head;
      }
    }
  }
  return max;
};
```

使用哈希

```js
var lengthOfLongestSubstring = function(s) {
    const length = s.length;
    const map = new Map();
    let i = 0,
        j = 0;
    let ans = 0;
    while (i < length && j < length) {
        // 容易理解：检查s[j]是否出现过，并且s[j]重复的字符是否在当前的滑动窗口中
        if (map.has(s[j]) && map.get(s[j]) >= i) {
            i = map.get(s[j]) + 1;
        }
        ans = Math.max(j - i + 1, ans);
        map.set(s[j], j);
        ++j;
    }
    return ans;
};
```
