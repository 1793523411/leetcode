/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var Q = ["", "M", "MM", "MMM"];
    var B = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var S = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var G = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return Q[Math.floor(num/1000)] + B[Math.floor((num%1000)/100)] + S[Math.floor((num%100)/10)] + G[num%10];
};


//贪心算法
var intToRoman2 = function (num) {
    let keys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        values = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let res = "";
    for (let i = 0; i < keys.length; i++) {
        while (num >= keys[i]) {
            num -= keys[i];
            res += values[i];
        }
    }
    return res;
};

console.log(intToRoman(300))