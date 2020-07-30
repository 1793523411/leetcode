var letterCombinations = function (digits) {
    if(!digits) return [];
    const strMap = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
    let result = [""]
    for(let num of digits){
        let nextResult = []
        let str = strMap[num]
        for(let t of result){
            for(let s of str){
                nextResult.push(t+s)
            }
        }
        result = nextResult
    }
    return result
}

/**
 * @param {string} digits
 * @return {string[]}
 */

 //flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些
//  var arr1 = [1, 2, 3, 4];

//  arr1.map(x => [x * 2]); 
//  // [[2], [4], [6], [8]]
 
//  arr1.flatMap(x => [x * 2]);
//  // [2, 4, 6, 8]
 
//  // only one level is flattened
//  arr1.flatMap(x => [[x * 2]]);
//  // [[2], [4], [6], [8]]

// reduce() 方法对**数组**中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => {console.log(accumulator, currentValue);return accumulator+currentValue}

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// > 1 2
// > 3 3
// > 6 4
// > 10

// reducer **函数**接收4个参数:

//     Accumulator (acc) (累计器)
//     Current Value (cur) (当前值)
//     Current Index (idx) (当前索引)
//     Source Array (src) (源数组)


// 参数：
// callback
//     执行数组中每个值 (如果没有提供 initialValue则第一个值除外)的函数，包含四个参数：

//     accumulator

//         累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（见于下方）。
//     currentValue
//         数组中正在处理的元素。
//     index 可选
//         数组中正在处理的当前元素的索引。 如果提供了initialValue，则起始索引号为0，否则从索引1起始。
//     array可选
//         调用reduce()的数组

// initialValue可选
//     作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。 


var letterCombinations2 = function (digits) {
    if (!digits) { return []; }
    const strMap = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    //这里的flatMap不能换成map
    return digits.split("").reduce((result, num) => result.flatMap(t => strMap[num].split("").map(s => t + s)), [""]);
    // initialValue可选
    // 作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。
};
