//贪心算法
var romanToInt = function (s) {
  let keys = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ],
    values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    res = 0,
    idx;
  while (s.length) {
    idx = keys.indexOf(s[0] + s[1]); //先判断是不是符合2个字符的单位
    if (idx >= 0) {
      s = s.substring(2, s.length);
    } else {
      idx = keys.indexOf(s[0]);
      s = s.substring(1, s.length);
    }
    res += values[idx]; //得到对应的值
  }
  return res;
};

//左加右减
var romanToInt2 = function(s) {
    let map = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000},
        sum = 0, loop = 0, num = 0, now = 0;
    while(loop < s.length) {
        now = map[s[loop]];
        if(num < now) {
            sum -= num;
        } else {
            sum += num;
        }
        num = now;
        loop++;
    }
    sum += num;
    return sum;
};

var romanToInt3 = function(s) {
    const map = {
        I : 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };
    let ans = 0;
    for(let i = 0;i < s.length;) {
        if(i + 1 < s.length && map[s.substring(i, i+2)]) {
            ans += map[s.substring(i, i+2)];
            i += 2;
        } else {
            ans += map[s.substring(i, i+1)];
            i ++;
        }
    }
    return ans;
};
