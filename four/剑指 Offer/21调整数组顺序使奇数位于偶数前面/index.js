var exchange = function (nums) {
    return nums.sort((a, b) => b % 2 - a % 2)
};

var exchange = function (nums) {
    let temp = [];
    let temp2 = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            temp.push(nums[i]);
        } else {
            temp2.push(nums[i]);
        }
    }
    return temp2.concat(temp);
};

var exchange = function (nums) {
    var i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] % 2 !== 0) {
            // var tmp=nums[j];
            // nums[j]=nums[i];
            // nums[i]=tmp;
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++;
        }
    }
    return nums;
};