/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//Sort不传参时，默认将元素转字符串，按每一个字节的Unicode编码位置值原地排序
var isAnagram = function (s, t) {
    return s.split("").sort().join("") === t.split("").sort().join("")
};

var isAnagram = function(s, t) {
    return Array.from(s).sort().join('') === Array.from(t).sort().join('')
};

var isAnagram = function(s, t) {
    return (s.match(/\w/g) || []).sort().join('') === (t.match(/\w/g) || []).sort().join('')
};

var isAnagram = function(s, t) {
    return s.split('').sort().toString() === t.split('').sort().toString()
};

//哈希
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    for(var i = Math.max(s.length, t.length), h = Object.create(null); i--;)
        h[s[i]] = (h[s[i]] || 0) + 1, h[t[i]] = (h[t[i]] || 0) - 1
    return Object.values(h).every(v => !v)
};

var isAnagram = function(s, t) {
    return s.length === t.length && Object.values(Array.from(s).reduce((h, v, i) => (h[v] = (h[v] || 0) + 1, h[t[i]] = (h[t[i]] || 0) - 1, h), {})).join('').replace(/0/g, '') === ''
};
