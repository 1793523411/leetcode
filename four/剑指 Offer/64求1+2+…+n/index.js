var sumNums = function (n) {
    return (n ** 2 + n) >> 1;
};


var sumNums = function (n) {
    return n && sumNums(n - 1) + n;
};