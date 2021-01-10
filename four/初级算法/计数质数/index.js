/**
 * @param {number}
 * @return {number}
 */

//暴力
var isPrime = function (n) {
    for (let i = 2; i * i <= n; ++i) {
        if (n % i === 0) {
            return false
        }
    }
    return true
};

var countPrimes = function (n) {
    let ans = 0;
    for (let i = 2; i < n; i++) {
        ans += isPrime(i)
    }
    return ans
}

console.log(countPrimes(10))

//埃氏筛
var countPrimes = function (n) {
    const isPrime = new Array(n).fill(1);
    let ans = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            ans += 1;
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = 0;
            }
        }
    }
    return ans
}

//线性筛,此方法不属于面试范围范畴

var countPrimes = function(n) {
    const isPrime = new Array(n).fill(1);
    const primes = [];
    for (let i = 2; i < n; ++i) {
        if (isPrime[i]) {
            primes.push(i);
        }
        for (let j = 0; j < primes.length && i * primes[j] < n; ++j) {
            isPrime[i * primes[j]] = 0;
            if (i % primes[j] === 0) {
                break;
            }
        }
    }
    return primes.length;
};