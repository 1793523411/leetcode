/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hashTable = {}
    function sort(str) {
        return str.split("").sort().join("");
    }
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i]
        const key = sort(str)
        if (!hashTable[key]) {
            hashTable[key] = [str]
        } else {
            // hashTable[key].push(str)
             hashTable[key].push(str);
        }
    }
    return Object.values(hashTable)
};

var groupAnagrams = function (strs) {
    // 类似桶排序
  
    let counts = [];
    const hashTable = {};
    for (let i = 0; i < strs.length; i++) {
      const str = strs[i];
      counts = Array(26).fill(0);
      for (let j = 0; j < str.length; j++) {
        counts[str[j].charCodeAt(0) - "a".charCodeAt(0)]++;
      }
      const key = counts.join("-");//["bdddddddddd", "bbbbbbbbbbc"],所有不能用""作为join的参数
      if (!hashTable[key]) {
        hashTable[key] = [str];
      } else {
        hashTable[key].push(str);
      }
    }
  
    return Object.values(hashTable);
  };