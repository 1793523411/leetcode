var lastRemaining = function (n, m) {
    const arr = [];
    for (let i = 0; i < n; i++) arr.push(i);
    let head = 0;
    while (arr.length > 1) {
        head = (head + m - 1) % arr.length;
        arr.splice(head, 1);
    }
    return arr[0];
};

var lastRemaining = function (n, m) {
    let ans = 0;
    for (let i = 2; i <= n; i++) {
        ans = (ans + m) % i;
    }
    return ans;
};