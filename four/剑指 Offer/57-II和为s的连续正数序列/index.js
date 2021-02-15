var findContinuousSequence = function (target) {
    let list = [];
    let left = 1;
    let right = 1;
    let sum = 0;
    while (left < target / 2) {
        if (sum < target) {
            sum += right;
            right++;
        } else if (sum > target) {
            sum -= left;
            left++;
        } else {
            let arr = [];
            for (let i = left; i < right; i++) {
                arr.push(i);
            }
            list.push(arr);
            sum -= left;
            left++;
        }
    }
    return list;
};
var findContinuousSequence = function (target) {
    this.res = [];
    this.t = target;
    for (var i = 1; i <= Math.ceil(t / 2); i++) {
        backTrack(i, 0, []);
    }
    return res;
};

var backTrack = function (n, sum, item) {
    if (sum == this.t) {
        this.res.push(item);
        return;
    } else if (sum < this.t) {
        item.push(n);
        backTrack(n + 1, sum + n, item);
    }
};