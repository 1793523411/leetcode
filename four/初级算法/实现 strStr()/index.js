/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    return haystack.indexOf(needle)
};

//超时啦
var strStr = function (haystack, needle) {

    if (needle === "") return 0

    for (let i = 0; i < haystack.length; i++) {
        if (haystack.split("").splice(i, needle.length).join("") === needle) {
            return i
        }
    }
    return -1
};

var strStr = function (haystack, needle) {
    for (var i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substr(i, needle.length) === needle) return i
    }
    return -1
};

//KMP
var strStr = function (haystack, needle) {
    if (needle == "") return 0;
    let next = getNext(needle);
    let hi = 0;
    let ne = 0;
    while (hi < haystack.length) {
        if (ne == -1 || haystack[hi] == needle[ne]) {//相等情况
            if (ne == needle.length - 1) return (hi - needle.length + 1);
            hi++;
            ne++;
        } else {//失配情况
            ne = next[ne];
        }
    }
    return -1;
};

function getNext(needle) {//获取next数组
    let next = [];
    next[0] = -1;
    let i = 0;
    let j = -1;
    while (i < needle.length) {
        if (j == -1 || needle[i] == needle[j]) {
            next[++i] = ++j;
        } else {
            j = next[j]//回溯
        }
    }
    return next;
}
