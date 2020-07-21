/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows){
    if(numRows < 2) return s
    const rows = []
    for(let i = 0;i<numRows;i++) rows[i] = ''
    let i = 0 ,flag = -1;
    for(const c of s){
        console.log(c)
        rows[i] += c
        if(i===0||i===numRows -1)
            flag = -flag
        i += flag
        // console.log(flag)
        console.log(i)
    }
    // console.log(rows)
    let res= ''
    for(const row of rows)
        res += row
    return res
}

console.log(convert('L',3))