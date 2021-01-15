/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    return s.replace(/ /g, "%20");
};

var replaceSpace = function (s) {
    if (typeof s == "string" && s.length >= 0 && s.length <= 10000) {
        return s.split(" ").join("%20");
    }
    return "";
};

//妙~~🤣
var replaceSpace = function (s) {
    if (s === "%20") { return s; }
    return encodeURI(s);
};

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