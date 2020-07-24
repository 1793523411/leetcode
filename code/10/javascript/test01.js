//!此代码错误！！！

var isMatch = function (s, p) {
  // 对模式变量进行正则筛选
  let modeArr = p.match(/([a-z.]\*)|([a-z]+(?=([a-z.]\*)|$)|.)/g);
  console.log(modeArr);
  let cur = 0;
  let strLen = s.length;
  for (let i = 0, len = modeArr.length, m; i < len; i++) {
    // 对于模式分为三类，.*|a*|cdef
    m = modeArr[i].split("");
    // 如果第二位是*表示是有模式的
    if(m.length ===1 &&m[0] === '.'){
        cur++
    }else
    if (m[1] === "*") {
      if (m[0] === "." && !modeArr[i+1]) {
        cur = strLen;
        break;
      } else {
        while (s[cur] === m[0]) {
          cur++;
        }
      }
    } else {
      for (let j = 0, jl = m.length; j < jl; j++) {
        if (m[j] !== s[cur]) {
          return false;
        } else {
          cur++;
        }
      }
    }
  }
  return cur === strLen;
};

console.log(isMatch("mississpppi", "mis*is*p*."));
console.log(isMatch("ab", ".*c"));
