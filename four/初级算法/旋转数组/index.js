/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//符合题目的原地解法
var rotate = function (nums, k) {
    let len = nums.length;
    k = k % len;
    let count = 0;
    for (let start = 0; count < len; start++) {
        let cur = start;
        let pre = nums[cur]
        do {
            let next = (cur + k) % len;
            let temp = nums[next]
            nums[next] = pre;
            pre = temp;
            cur = next;
            count++
        } while (start != cur)
    }
};

//暴力解法
var rotate = function (nums, k) {
    k = k % nums.length;
    for (let i = 0; i < k; i++) {
        let last = nums[nums.length - 1];
        for (let j = nums.length - 1; j > 0; j--) {
            nums[j] = nums[j - 1]
        }
        nums[0] = last
    }
};

//js为值传递····
//将数组原地翻转翻转，然后反转前 k 个元素，再反转后面l-k个元素，就能得到想要的结果
var rotate = function (nums, k) {
    nums = reverse(nums)
     let num1 = reverse(nums.slice(0, k % nums.length))
     let num2 = reverse(nums.slice(k % nums.length, nums.length))
     nums = [...num1, ...num2]
 };
 
 function reverse(arr) {
     return arr.reverse()
 }


//!看看javascript如何做的
var rotate = function(nums, k) {
    for (var i = 0; i < k; i++) {
        nums.unshift(nums.pop())
    }
};


var rotate = function(nums, k) {
    nums.splice(0, 0, ...nums.splice(nums.length - k))
};


var rotate = function(nums, k) {
    nums.unshift(...nums.splice(nums.length - k))
};

