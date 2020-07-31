/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let len = nums.length;
    let ans = [];
    if(len < 4){
        return ans;
    }
    nums = nums.sort((a,b) => a-b);
    //判断一下边界
    if(target < nums[0]+nums[1]+nums[2]+nums[3] || target > nums[len-1]+nums[len-2]+nums[len-3]+nums[len-4]){
        return ans;
    }
    for(let i = 0 ;i<len-3;i++){
        //去除重复
        if(i>0&&nums[i]==nums[i-1]){
            continue;
        }
        //判断一下边界
        if(target < nums[i]+nums[i+1]+nums[i+2]+nums[i+3]){
            break;
        }
        //判断一下边界
        if(target > nums[i]+nums[len-1]+nums[len-2]+nums[len-3]){
            continue;
        }
        for(let j = i+1; j<len-2;j++){
            //去除重复
            if(j>i+1 && nums[j] == nums[j-1]){
                continue;
            }
            //判断一下边界
            if(target < nums[i]+nums[j]+nums[j+1]+nums[j+2]){
                break;
            }
            //判断一下边界
            if(target > nums[i]+nums[j]+nums[len-1]+nums[len-2]){
                continue;
            }
            let L = j + 1,R = len - 1;
            while(L<R){
                let sum = nums[i]+nums[j]+nums[L]+nums[R];
                if(sum == target){
                    ans.push([nums[i],nums[j],nums[L],nums[R]]);
                    L++;
                    //去除重复
                    while(L<R&&nums[L-1] == nums[L]){
                        L++;
                    }
                    R--;
                    //去除重复
                    while(L<R&&nums[R+1] == nums[R]){
                        R--;
                    }
                }else if(sum>target){
                    R--;
                    //去除重复
                    while(L<R&&nums[R+1] == nums[R]){
                        R--;
                    }
                }else {
                    L++;
                    //去除重复
                    while(L<R&&nums[L-1] == nums[L]){
                        L++;
                    }
                }
            }
        }
    }
    return ans;
};

// 通过	112 ms	40.2 MB	JavaScript