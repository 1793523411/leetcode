var hammingWeight = function (n) {
    let count = 0;
    while (n) {
      // n % 2 == 1
      if (n & 1 == 1)) {
        count++;
      }
      n >>>= 1;
    }
    return count;
  };