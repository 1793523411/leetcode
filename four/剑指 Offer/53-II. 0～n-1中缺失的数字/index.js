var missingNumber = function (nums) {
    nums.push("x"); //防止缺失的是最后一个
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) return i;
    }
};


var missingNumber = function (nums) {
    let len = nums.length;
    //判断是否是第一个或者最后一个缺失，这样判断了下面二分查找就不用处理边界值了
    if (nums[0] != 0) {
        return 0;
    }
    if (nums[len - 1] != len) {
        return len;
    }
    //开始二分查找
    let i = 0,
        j = len - 1,
        mid;
    //每一次循环都会把区间缩小，最后只剩左右区间挨着，他们中间的数即为缺失的数，判断分界点的时候就可以直接return
    while (i < j) {
        mid = Math.floor((i + j) / 2);
        //如果此点的值与索引号对应，说明在此点之后缺失
        if (nums[mid] == mid) {
            //判断是否是在分界点缺失
            if (nums[mid + 1] != mid + 1) return mid + 1;
            i = mid + 1;
        } else {
            //判断是否是在分界点缺失
            if (nums[mid - 1] == mid - 1) return mid;
            j = mid - 1;
        }
    }
};

var missingNumber = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = (right + left) >> 1;
        if (nums[mid] === mid) {
            // 小了
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};

var missingNumber = function (nums) {
    let res = nums.length;
    nums.forEach((item, index) => {
        res ^= item ^ index;
    });
    return res;
};