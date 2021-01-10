/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let res = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) res.push("FizzBuzz")
        else if (i % 5 === 0) res.push("Buzz")
        else if (i % 3 === 0) res.push("Fizz")
        else res.push(i + "")
    }
    return res
};

var fizzBuzz = function (n) {
    const result = [];
    for (let i = 1; i < n + 1; i++) {
        let current = '';
        current += i % 3 ? '' : 'Fizz';
        current += i % 5 ? '' : 'Buzz';
        if (!current) current += i;
        result.push(current);
    }
    return result;
};

var fizzBuzz = function (n) {
    const list = [
        "",
        "",
        "Fizz",
        "",
        "Buzz",
        "Fizz",
        "",
        "",
        "Fizz",
        "Buzz",
        "",
        "Fizz",
        "",
        "",
        "FizzBuzz"
    ]
    const arr = []
    for (let i = 0; i < n; i++) {
        const index = i % 15
        arr[i] = list[index] || (i + 1).toString()
    }

    return arr
};


console.log(fizzBuzz(15))