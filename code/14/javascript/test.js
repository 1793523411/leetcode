/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function (strs) {
//   //1.currentValue 	必需。当前元素
//   // 2.index 	可选。当前元素的索引值。
//   // 3.arr 	可选。当前元素所属的数组对象。
//   let pre = strs[0][0]
//   let now = strs[0][0];
//   let s = ''
//   let i = 0
//   let tag = false
//   while(!tag) {
//     strs.forEach((k) => {
//       now = k[i];
//       pre = now
//       if(now !== pre){
//           tag = true
//           return
//       }
//       console.log(tag)
//     });
//     console.log(pre)
//     s += pre
//     i++
//   }
//   return s
// };

var longestCommonPrefix = function(strs) {
    if(strs.length === 0) 
        return "";
    let ans = strs[0];
    for(let i =1;i<strs.length;i++) {
        let j=0;
        for(;j<ans.length && j < strs[i].length;j++) {
            if(ans[j] !== strs[i][j])
                break;
        }
        ans = ans.substr(0, j);
        if(ans === "")
            return ans;
    }
    return ans;
};


console.log(longestCommonPrefix(["flower", "flow", "flight"]));
