/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//桶排序
var intersect = function (nums1, nums2) {
    const map = [];
    const res = []
    for (const num1 of nums1) {
        if (map[num1]) {
            map[num1]++
        } else {
            map[num1] = 1;
        }
    }
    for (const num2 of nums2) {
        const val = map[num2];
        if (val > 0) {
            res.push(num2);
            map[num2]--;
        }
    }
    return res;
};

//双指针
var intersect = function (nums1, nums2) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    const res = []
    let p1 = 0, p2 = 0;
    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] > nums2[p2]) {
            p2++
        } else if (nums1[p1] < nums2[p2]) {
            p1++
        } else {
            res.push(nums1[p1])
            p1++;
            p2++;
        }
    }
    return res
};