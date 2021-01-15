# 替换空格

```
请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

示例 1：

输入：s = "We are happy."
输出："We%20are%20happy."
 

限制：

0 <= s 的长度 <= 10000
```

## 正则

```js
var replaceSpace = function (s) {
  return s.replace(/ /g, "%20");
};
```

## 巧用 split + join

```js
var replaceSpace = function (s) {
  if (typeof s == "string" && s.length >= 0 && s.length <= 10000) {
    return s.split(" ").join("%20");
  }
  return "";
};
```

## encodeURI是真的妙🤣

```js
var replaceSpace = function (s) {
 if (s === "%20") {return s;}
    return encodeURI(s);
};
```

## 常规解法

```js
var replaceSpace = function (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      res += "%20";
      continue;
    }
    res += s[i];
  }
  return res;
};
```
