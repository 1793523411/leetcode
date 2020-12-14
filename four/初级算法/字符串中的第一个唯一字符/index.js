/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i
        }
    }
    return -1
};
var firstUniqChar = function (s) {
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        let count = map.get(s[i]) || 0;
        map.set(s[i], count + 1)
    }
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) return i
    }
    return -1
};

//哈哈哈哈哈哈哈哈哈·····
var firstUniqChar = function(s) {
    s = s.split('')
    let item = {}
    for( let i = 0 ; i < s.length ; i++ ){
        if( item.hasOwnProperty( s[i] ) ){
            item[ s[i] ]++
        }else{
            item[ s[i] ] = 1
        }
    }
    for( let i = 0 ; i < s.length ; i++ ){
        if( item[s[i]] == 1 ) return i
    }
    return -1
};
