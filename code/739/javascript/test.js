/**
 * @param {number[]} T
 * @return {number[]}
 */
//比较笨容易想得到的方法，从左遍历，更好地方法去看java代码
var dailyTemperatures = function(T) {
    let res = []
    let count = 0
    for(let i=0; i<T.length;i++){
        for(let j = i+1;j<T.length;j++){
            count++;
            if(T[j]>T[i]){
                res.push(count)
                break
            }else if(j ===T.length-1 ){
                res.push(0)
            }
        }
        count = 0
    }
    res.push(0)
    return res
};
// 执行用时：2044 ms, 在所有 JavaScript 提交中击败了8.36% 的用户
// 内存消耗：48.2 MB, 在所有 JavaScript 提交中击败了66.67% 的用户