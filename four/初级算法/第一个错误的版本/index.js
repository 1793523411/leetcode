/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = (isBadVersion) => {
    // n是版本总数 函数返回第一个错误的版本号
    return (n) => {
      let low = 0, high = n;
      let firstBadVer = n;
      while (low <= high) {
        const mid = (low + high) >>> 1;
        if (isBadVersion(mid)) {
          firstBadVer = mid; // mid是坏版本，
          high = mid - 1; // 将右指针考察mid-1
        } else {
          low = mid + 1; // mid还不是坏版本，将左指针考察到mid+1
        }
      }
      return firstBadVer;
    };
  };
  