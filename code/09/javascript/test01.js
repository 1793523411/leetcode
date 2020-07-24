var isPalindrome = function(x) {
    // reverse() 方法用于颠倒数组中元素的顺序。
    console.log(x.toString().split('').reverse().join(''))
    return x.toString() === x.toString().split('').reverse().join('')
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))

// 执行用时：240 ms, 在所有 JavaScript 提交中击败了44.47% 的用户
// 内存消耗：48.3 MB, 在所有 JavaScript 提交中击败了6.00% 的用户

