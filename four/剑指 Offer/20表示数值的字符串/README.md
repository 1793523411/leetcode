# 表示数值的字符串

```
请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。例如，字符串"+100"、"5e2"、"-123"、"3.1416"、"-1E-16"、"0123"都表示数值，但"12e"、"1a3.14"、"1.2.3"、"+-5"及"12e+5.4"都不是。
```

## 调用 js API

```js
var isNumber = function(s) {
    return s.replace(/\s/g, '') !== '' && !isNaN(Number(s))
};
```

## 正常解法😥😥

```js
const isNumber = (s) => {
  let cursor = 0; // 扫描字符的光标
  let isValid;    // 标识变量，当前扫描时是否有效

  const scanSignedInteger = (s) => { // 扫描有符号整数的字符
    if (s[cursor] === '+' || s[cursor] === '-') { // 遇到+-，指针后移
      cursor++;
    }
    return scanUnsignedInteger(s); // 考察无符号数字部分
  };

  const scanUnsignedInteger = (s) => { // 扫描无符号整数部分的字符
    const temp = cursor;  // 临时保存当前指针位置
    while (s[cursor] >= '0' && s[cursor] <= '9') { // 遇到0-9数字就指针后移
      cursor++;                                    // 函数结束时，指针已扫完连续数字部分
    }
    return s[temp] >= '0' && s[temp] <= '9'; // 判断当前指针是否指向数字0-9
  };

  while (s[cursor] === ' ') { // 跳过开头的空格字符
    cursor++;
  }

  isValid = scanSignedInteger(s); // 先扫描整数部分

  if (s[cursor] === '.') { // 此时扫完整数部分，看看有没有遇到小数点
    cursor++;                     // 指针跳过小数点
    if (scanUnsignedInteger(s)) { // 扫描小数部分的整数
      isValid = true;                // 如果返回true，说明暂时是有效的数字
    }
    // 如果返回false，还不能说明是错的，因为有 '3.' 这种case
  }

  if (s[cursor] === 'e' || s[cursor] === 'E') { // 看看有没有遇到e/E
    cursor++;                    // 指针跳过E/e
    if (isValid) {               // E/e前面一定要是有效整数
      isValid = scanSignedInteger(s);  // E/e后面可以是有符号整数 比如 1e-9
    }
  }

  while (s[cursor] === ' ') { // 跳过结尾的空格字符
    cursor++;
  }

  if (s[cursor] !== undefined) { // 此时指针该越界了，我们希望它是undefined
    return false;     // 如果不是，那就false 比如 '3..' '3 8'，一个是.一个是8
  }
  return isValid;
};
```