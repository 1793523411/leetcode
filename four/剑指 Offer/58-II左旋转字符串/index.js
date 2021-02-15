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

var reverseLeftWords = function (s, n) {
    s = s.split("")
    for (let i = 0; i < n; i++) {
        const tmp = s.shift()
        s.push(tmp)
    }
    return s.join("")
};