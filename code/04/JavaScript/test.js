var findMedianSortedArrays = function (nums1, nums2) {
  let nums = [];
  const m = nums1.length;
  const n = nums2.length;
  if (m === 0) {
    if (n % 2 === 0) {
      return (nums2[Math.floor(n / 2) - 1] + nums2[Math.floor(n / 2)]) / 2.0;
    } else {
      return nums2[Math.floor(n / 2)];
    }
  }
  if (n === 0) {
    if (m % 2 == 0) {
      return (nums1[Math.floor(m / 2) - 1] + nums1[Math.floor(m / 2)]) / 2.0;
    } else {
      return nums1[Math.floor(m / 2)];
    }
  }
  let count = 0;
  let i = 0,
    j = 0;
  while (count !== m + n) {
    if (i === m) {
      while (j !== n) {
        nums[count++] = nums2[j++];
      }
      break;
    }
    if (j === n) {
      while (i !== m) {
        nums[count++] = nums1[i++];
      }
      break;
    }
    if (nums1[i] < nums2[j]) {
      nums[count++] = nums1[i++];
    } else {
      nums[count++] = nums2[j++];
    }
  }
  if (count % 2 == 0) {
    return (nums[Math.floor(count / 2) - 1] + nums[Math.floor(count / 2)]) / 2.0;
  } else {
    return nums[Math.floor(count / 2)] / 1.0;
  }
};

// 执行用时：168 ms, 在所有 JavaScript 提交中击败了18.32% 的用户
// 内存消耗：42.8 MB, 在所有 JavaScript 提交中击败了6.25% 的用户

// console.log(findMedianSortedArrays([1, 3], [2]));
// console.log(findMedianSortedArrays([1, 2], [3, 4]));
// console.log(findMedianSortedArrays([0, 0], [0, 0]));
console.log(findMedianSortedArrays([],[1]))