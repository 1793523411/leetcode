var singleNumber = function (nums) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        let cnt = 0; //记录当前 bit 有多少个1
        let bit = 1 << i; //记录当前要操作的 bit
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] & bit) cnt++;
        }
        //不等于0说明唯一出现的数字在这个 bit 上是1
        if (cnt % 3 != 0) res = res | bit;
    }
    return res;
};