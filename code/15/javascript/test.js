/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//超出时间限制，我的天，白写了（也没白写，评论区里全是人才）
var threeSum = function(nums) {
    let res = []
    let flag = 0
    for(let i = 0;i<nums.length;i++){
        for(let j = 0;j<nums.length;j++){
            if(i===j) continue
            for(let k=0;k<nums.length;k++){
                flag = 0
                if(j===k||i===k) continue
                if(nums[i]+nums[j]+nums[k] === 0) {
                    let tmp = [nums[i],nums[j],nums[k]]
                    // console.log(tmp)
                    for(let x = 0;x<res.length;x++){
                        let tmp1 = tmp.sort((a,b) => a-b)
                        let tmp2 = res[x].sort((a,b) => a-b)
                        if(tmp1.join() === tmp2.join()){
                            flag = 1
                        }
                    }
                    if(flag === 1) continue
                    res.push(tmp)
                }
            }
        }
    }
    return res
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))