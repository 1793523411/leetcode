var isValid = function (s) {
  let res = [];
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      res.push(s[i]);
    } else if (res.length === 0 || s[i] !== map[res.pop()]) {
      return false;
    }
  }
  return res.length === 0;
};
// > let map = {'(':')','{':'}'}
// undefined
// > '{' in map
// true
// > '}' in map
// false
// > map['(']
// ')'