/**
 * @param {string} s
 * @return {number}
 */

//使用一个数组来维护滑动窗口
var lengthOfLongestSubstring = function (s) {
    let arr = [], max = 0
    for (let i = 0; i < s.length; i++) {
        let index = arr.indexOf(s[i])
        if (index != -1) {
            arr.splice(0, index + 1)
        }
        arr.push(s.charAt(i))
        max = Math.max(arr.length, max)
    }
    return max
};

//使用下标来维护滑动窗口
var lengthOfLongestSubstring = function (s) {
    let index = 0; max = 0;
    for (let i = 0, j = 0; j < s.length; j++) {
        index = s.substring(i, j).indexOf(s[j])
        if (index != -1) {
            i = i + index + 1;
        }
        max = Math.max(max, j - i + 1)
    }
    return max
}

//使用 map 来存储当前已经遍历过的字符，key 为字符，value 为下标
// 使用 i 来标记无重复子串开始下标，j 为当前遍历字符下标
var lengthOfLongestSubstring = function(s) {
    let map = new Map(), max = 0
    for(let i = 0, j = 0; j < s.length; j++) {
        if(map.has(s[j])) {
            i = Math.max(map.get(s[j]) + 1, i)
        }
        max = Math.max(max, j - i + 1)
        map.set(s[j], j)
    }
    return max
};

// 双指针

var lengthOfLongestSubstring = function (s) {
    const map = {};
    let l = 0,
        r = 0,
        max = 0;

    while (r < s.length) {
        const pos = map[s[r]];
        if (pos >= l && pos <= r) l = pos + 1;
        map[s[r]] = r;
        max = Math.max(max, r - l + 1);
        r++;
    }
    return max;
};
