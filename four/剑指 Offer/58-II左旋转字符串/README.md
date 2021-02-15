# 左旋转字符串

```
字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

 

示例 1：

输入: s = "abcdefg", k = 2
输出: "cdefgab"
示例 2：

输入: s = "lrloseumgh", k = 6
输出: "umghlrlose"
 

限制：

1 <= k < s.length <= 10000
```

## 使用 slice 或 substr 或 substring

```js
var reverseLeftWords = function (s, n) {
  return s.slice(n) + s.slice(0, n);
};
```

```js
var reverseLeftWords = function (s, n) {
  return s.substring(n) + s.substring(n, 0);
};
```

```js
var reverseLeftWords = function (s, n) {
  return s.substr(n, s.length - n) + s.substr(0, n);
};
```

```
几秒前	通过	88 ms	39.1 MB	JavaScript  -slice
几秒前	通过	76 ms	39.4 MB	JavaScript  -substring
几秒前	通过	76 ms	39.3 MB	JavaScript  -substr
```

## 使用 push+shift

```js
var reverseLeftWords = function (s, n) {
  s = s.split("");
  for (let i = 0; i < n; i++) {
    s.push(s.shift());
  }
  return s.join("");
};
```

## 不使用 API

```js
var reverseLeftWords = function (s, n) {
  let str = "";
  for (let i = n; i < s.length; i++) {
    str += s[i];
  }
  for (let i = 0; i < n; i++) {
    str += s[i];
  }
  return str;
};
```
