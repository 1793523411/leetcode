/**
 * @param {string} s
 * @return {boolean}
 */
//使用map
var isValid = function (s) {
    const cache = [];
    const map = new Map()
    map.set("(", ")")
    map.set("[", "]")
    map.set("{", "}")

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) cache.push(s[i])
        else {
            if (cache.length === 0) return false;
            if (map.get(cache[cache.length - 1]) === s[i]) cache.pop()
            else return false
        }
    }
    if (cache.length) return false
    return true
};

//使用栈
var isValid = function (s) {
    const stack = []
    for (let i = 0; i < s.length; i++) {
        const c = s[i]
        if (c === '{' || c == '[' || c == '(') {
            stack.push(c)
        } else {
            if (stack.length == 0) {
                return false
            }
            const top = stack[stack.length - 1]
            if (top == '(' && c == ')' || top == '[' && c == ']' || top == '{' && c == '}') {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
}

var isValid = function(s) {
    let arr = []
    let len = s.length
    if (len%2) return false
    for (let i = 0; i < len; i++) {
        let letter = s[i]
        switch(letter) {
            case "(": {
                arr.push(letter)
                break;
            }
            case "[": {
                arr.push(letter)
                break;
            }
            case "{": {
                arr.push(letter)
                break;
            }
            case ")": {
                if (arr.pop() !== "(") return false
                break;
            }
            case "]": {
                 if (arr.pop() !== "[") return false
                break;
            }
            case "}": {
                if (arr.pop() !== "{") return false
                break;
            }
        }
    }
    return !arr.length

};

var isValid = function (s) {
    while (s.length) {
        var temp = s;
        s = s.replace('()', '');
        s = s.replace('[]', '');
        s = s.replace('{}', '');
        if (s == temp) return false
    }
    return true;
};

//做人，最重要的就是开心。
var isValid = function(s) {
    return Math.random() < 0.5
}