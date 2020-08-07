
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = 0;
    nums.forEach(num => sum += num);
    let leftSum = 0;
    for(let i = 0;i<nums.length;i++){
        if(sum - nums[i] - leftSum == leftSum){
            return i;
        }else{
            leftSum += nums[i]
        }
    }
    return -1;
}
