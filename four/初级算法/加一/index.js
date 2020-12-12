/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {

        if (digits[i] === 9 && i === 0) {
            digits[i] = 0
            digits.unshift(1)
            break
        }

        if (digits[i] === 9) {
            digits[i] = 0
        } else {
            digits[i]++;
            break
        }
    }
    return digits
};

//一些静态类型语言，数组默认值为0
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] = digits[i] % 10;
        if (digits[i] != 0) return digits
    }
    digits = new Array(digits.length + 1);
    digits.fill(0);
    digits[0] = 1;
    return digits
};