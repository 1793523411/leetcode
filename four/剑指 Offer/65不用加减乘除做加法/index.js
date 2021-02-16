var add = function (a, b) {
    if (a == 0) return b;
    if (b == 0) return a;
    return add(a ^ b, (a & b) << 1);
};

var add = function (a, b) {
    while (b != 0) {
        [a, b] = [a ^ b, (a & b) << 1];
    }
    return a;
};