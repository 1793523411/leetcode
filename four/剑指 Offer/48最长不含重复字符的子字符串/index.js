var lengthOfLongestSubstring = function (s) {
    const len = s.length;
    let res = 0;
    let temp = '';
    for (let i = 0; i < len; i++) {
        if (temp.indexOf(s[i]) === -1) {
            temp += s[i];
            res = Math.max(res, temp.length);
        } else {
            temp = temp.slice(temp.indexOf(s[i]) + 1);
            temp += s[i];
        }
    }
    return res;
};

var lengthOfLongestSubstring = function (s) {
    let max = 1;
    let len = s.length;
    if (len <= 1) {
        return len;
    }
    let head = 0, tail = 1, index = -1;
    while (tail < len) {
        index = s.substring(head, tail).indexOf(s[tail]);
        if (index != -1 && head < tail) {
            head += index + 1;
            tail++;
        } else {
            tail++;
            if (tail - head > max) { max = tail - head; }
        }
    }
    return max;
};