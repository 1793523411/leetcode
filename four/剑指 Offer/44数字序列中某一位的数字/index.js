var findNthDigit = function (n) {
    for (let bit = 1; bit < 32; ++bit) {
        const startNum = Math.pow(10, bit - 1);
        const bitSum = 9 * startNum * bit;
        if (n > bitSum) {
            n -= bitSum;
        } else {
            let num = startNum + Math.ceil(n / bit) - 1;
            let pos = n - bit * (num - startNum) - 1;
            return num.toString(10)[pos];
        }
    }
};

var findNthDigit = function (n) {
    if (n < 10) return n;
    let i = 1;//几位数
    let num = 9;
    while (n >= num) {
        n -= num;
        i++;
        num = 9 * 10 ** (i - 1) * i;
    }
    //此时n就是i位数里面的第几个字符
    // 然后找到是哪个数字
    n--;//变为下标
    let start = 10 ** (i - 1) + parseInt(n / i) + '';
    return start[n % i];
};
