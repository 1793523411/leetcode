/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let len1 = m - 1;
    let len2 = n - 1;
    let len = m + n - 1;
    while (len1 >= 0 && len2 >= 0) {
        nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
    }
    function arrayCopy(src, srcIndex, dest, destIndex, length) {
        dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
    }
    arrayCopy(nums2, 0, nums1, 0, len2 + 1);
};

//和上面那种思路类似，不过是换了种写法
var merge = function (nums1, m, nums2, n) {
    let length = m + n;
    while (n > 0) {
        if (m <= 0) {
            nums1[--length] = nums2[--n]
        }
        nums1[--length] = nums1[m - 1] >= nums2[n - 1] ?
            nums2[--m] : nums2[--n]
    }
};

//从go那得到的灵感，go操作数组要方便得多
var merge = function (nums1, m, nums2, n) {
    let tmp = [...nums1.slice(0, m), ...nums2].sort((a, b) => a - b)
    nums1 = tmp
};

var merge = function (nums1, m, nums2, n) {
    for (let i = 0; i < n; i++) {
        nums1.pop()
    }
    for (let j = 0; j < n; j++) {
        nums1.push(nums2[j])
    }
    nums1.sort((a, b) => a - b)
};

