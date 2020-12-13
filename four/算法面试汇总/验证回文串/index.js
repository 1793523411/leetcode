/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s, l = 0, r = s.length - 1) {
    while (l < r) {
        if (/[\W|_]/.test(s[l]) && ++l) continue
        if (/[\W|_]/.test(s[r]) && r--) continue
        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false
        l++, r--
    }
    return true
};


//不使用正则
var isPalindrome = function (s) {
    s = s.toUpperCase();
    let i = 0, j = s.length - 1;

    while (i < j) {
        if (!isValid(s[i])) {
            i++;
            continue;
        }
        if (!isValid(s[j])) {
            j--;
            continue;
        }
        if (s[i] != s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

var isValid = function (c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9');
};

//!--------------------------
let s = "A man, a plan, a canal: Panama".toLowerCase().split('')
console.log(s)
s.forEach((item, index) => {

    if (!(item >= 'a' && item <= 'z') || (item >= 'A' && item <= 'Z') || (item >= '0' && item <= '9') || item === " ") {
        s.splice(index, 1)
    }
});
console.log(s.join("").replace(/\s*/g, "")) //全局匹配空格

let s = "A man,a plan,a canal:Panama".toLowerCase().split('')
console.log(s)
s.forEach((item, index) => {

    if (item === " " || !(item >= 'a' && item <= 'z') || (item >= 'A' && item <= 'Z') || (item >= '0' && item <= '9')) {
        s.splice(index, 1)
    }
});
console.log(s.join(""))

// ["a", " ", "m", "a", "n", ",", " ", "a", " ", "p", "l", "a", "n", ",", " ", "a", " ", "c", "a", "n", "a", "l", ":", " ", "p", "a", "n", "a", "m", "a"]
// "amanaplanacanalpanama"