/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    // nums = nums.sort( (a,b)=> a-b)
    nums = quickSort(nums)
    return nums.reduce( (total, cur, index )=>{
        if(index % 2 === 0 ) total += cur
        return total
    },0)
};

// 快速排序 - 双指针
var quickSort = (arr)=> {
　　if (arr.length <= 1) return arr;
    const pivotIndex = Math.floor(arr.length / 2);
    const [pivot] = arr.splice(pivotIndex, 1);
    let left = [], right = [];
    for( let i=0, len=arr.length; i<len; i++){
        if(arr[i] < pivot ){
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right))
}
