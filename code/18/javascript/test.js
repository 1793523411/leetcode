//暴力循环,q去重方法：把结果变为字符串进行比较

var fourSum = function (nums, target) {
    let len = nums.length;
    if(len<4) return [];
    let ans = [];
    for(let i = 0;i<len-3;i++){
        for(j = i+1;j<len-2;j++){
            for(let x = j+1;x<len-1;x++){
                for(let y = x+1;y<len;y++){
                    if(nums[i] + nums[j]+nums[x]+nums[y] === target){
                        let temp = nums[i]+nums[j]+nums[x]+nums[y]
                        if(removeDup(ans,temp)){
                            ans.push(temp)
                        }
                    }
                }
            }
        }
    }
    return ans
}

function removeDup(ans,item){
    let itemStr = item.toString()
    for(let i=0;i<ans.length;i++){
        if(ans[i].toString() === itemStr){
            return false
        }
    }
    return true
}

// 通过	836 ms	42.1 MB	JavaScript
//双指针法： 通过	112 ms	40.2 MB	JavaScript

//这说明什么，算法玩的好，前端页面加载快，当然是前提是用原生js写，嘿嘿嘿