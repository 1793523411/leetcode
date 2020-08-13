var findMaxConsecutiveOnes = function(nums) {
    return nums.join('').split(0).sort().pop().length
}
// > let a = [1,0,1,1,0,0,0,1]
// undefined
// > a
// [
//   1, 0, 1, 1,
//   0, 0, 0, 1
// ]
// > a.join('')
// '10110001'
// > a
// [
//   1, 0, 1, 1,
//   0, 0, 0, 1
// ]
// > a.join('').split(0)
// [ '1', '11', '', '', '1' ]
// > a.join('').split(0).sort()
// [ '', '', '1', '1', '11' ]
// >

var findMaxConsecutiveOnes = function(nums) {
    let now = 0;
    let max = 0;
    nums.forEach(num => num ? now++ : (max = Math.max(now, max), now = 0));
    return Math.max(now, max);
};

//额外使用一个数组存放结果
var findMaxConsecutiveOnes = function(nums) {
    let dp = new Array(nums.length);
    dp[0] = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === 0){
            dp[i] = 0;
        }else{
            dp[i] = dp[i - 1] + 1;
        }
    }
    return Math.max(...dp);
};