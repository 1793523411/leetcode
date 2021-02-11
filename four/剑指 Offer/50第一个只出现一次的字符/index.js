var firstUniqChar = function (s) {
    if (!s) return " ";
    let map = new Map();
    for (let c of s) {
        if (map.has(c)) {
            map.set(c, map.get(c) + 1);
        } else {
            map.set(c, 1);
        }
    }
    for (let c of map.keys()) {
        if (map.get(c) === 1) {
            return c;
        }
    }

    return " ";
};

var firstUniqChar = function (s) {
    let arr = new Array(26).fill(0);

    for (let c of s) {
        arr[c.charCodeAt() - 97] += 1;
    }

    for (let c of s) {
        if (arr[c.charCodeAt() - 97] == 1) {
            return c;
        }
    }
    return ' ';
};