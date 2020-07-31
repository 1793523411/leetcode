//使用hash表改造暴力循环的最后一重循环，空间换时间,这种解法就有点扯了·····

var fourSum = function (nums, target) {
    let len = nums.length;
    if(len<4) return []
    let ans = []
    for(let i=0 ;i<len-2;i++){
        for(let j = 0;j<len-1;j++){
            let map = {}
            for(let x = 0;x<len;x++){
                let key = target - nums[i] - nums[j] - nums[x]
                if(tmp[nums[x]]){
                    let tmp = [nums[x],...map[nums[x]]].sort((a,b) => a-b)
                    if(removeDup(ans,tmp)){
                        ans.push(tmp)
                    }
                }else{
                    map[key] = [nums[i],nums[j].nums[x]]
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