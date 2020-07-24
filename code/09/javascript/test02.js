//进阶：不把数字转为字符串
var isPalindrome = function (x) {
    let res = 0
    const x2 = x
    if(x<0) return false
    while(x!==0){
        res = res*10 + x%10
        x = Math.floor(x/10)
    }
    console.log(res,x2)
    return x2 === res
};

console.log(isPalindrome(121))
console.log(isPalindrome(123))
console.log(isPalindrome(-123))

// 执行用时：268 ms, 在所有 JavaScript 提交中击败了17.09% 的用户
// 内存消耗：47.3 MB, 在所有 JavaScript 提交中击败了6.00% 的用户

// 这tm还不如转成字符串

