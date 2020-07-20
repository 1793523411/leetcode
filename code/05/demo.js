var longestPalindrome = function(s) {
    if(s.length === 0){
        return ""
    }
    let range = [0,0]
    for(let i = 0;i<s.length;i++){
        i = findLongest(s,i,range)
    }
    console.log(range)
    //substring(1,5)从第二个位置截取到第五个位置；（下标1-4）
    return s.slice(range[0],range[1]+1)
};

function findLongest(str,low,range){
    let high = low;
    while(high < str.length-1 && str[high +1] == str[low]){
        high++
        console.log(high)
    }
    let ans = high
    while (low > 0 && high < str.length - 1 && str[low - 1] === str[high + 1]) {
        low--;
        high++;
    }
    if (high - low > range[1] - range[0]) {
        range[0] = low;
        range[1] = high;
    }
    return ans;
}

console.log(longestPalindrome('abbbs'))
console.log(longestPalindrome('babad'))