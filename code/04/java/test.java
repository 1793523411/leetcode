public class test {
    // public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
    //     int[] nums;
    //     int m = nums1.length;
    //     int n = nums2.length;
    //     nums = new int[m + n];
    //     if (m == 0) {
    //         if (n % 2 == 0) {
    //             return (nums2[n / 2 - 1] + nums2[n / 2]) / 2.0;
    //         } else {
    //             return nums2[n / 2];
    //         }
    //     }
    //     if (n == 0) {
    //         if (m % 2 == 0) {
    //             return (nums1[m / 2 - 1] + nums1[m / 2]) / 2.0;
    //         } else {
    //             return nums1[m / 2];
    //         }
    //     }
    //     int count = 0;
    //     int i = 0, j = 0;
    //     while (count != (m + n)) {
    //         if (i == m) {
    //             while (j != n) {
    //                 nums[count++] = nums2[j++];
    //             }
    //             break;
    //         }
    //         if (j == n) {
    //             while (i != m) {
    //                 nums[count++] = nums1[i++];
    //             }
    //             break;
    //         }
    //         if (nums1[i] < nums2[j]) {
    //             nums[count++] = nums1[i++];
    //         } else {
    //             nums[count++] = nums2[j++];
    //         }
    //     }
    //     if (count % 2 == 0) {
    //         return (nums[count / 2 - 1] + nums[count / 2]) / 2.0;
    //     } else {
    //         return nums[count / 2];
    //     }
    // }
    public static double findMedianSortedArrays(int[] A, int[] B) {
        int m = A.length;
        int n = B.length;
        int len = m + n;
        int left = -1, right = -1;
        int aStart = 0, bStart = 0;
        for (int i = 0; i <= len / 2; i++) {
            left = right;
            if (aStart < m && (bStart >= n || A[aStart] < B[bStart])) {
                right = A[aStart++];
            } else {
                right = B[bStart++];
            }
        }
        // if ((len & 1) == 0)
        if ((len % 2) == 0)
            return (left + right) / 2.0;
        else
            return right;
    }
    // 执行用时：2 ms, 在所有 Java 提交中击败了100.00% 的用户
    // 内存消耗：40.8 MB, 在所有 Java 提交中击败了100.00% 的用户

    public static void main(String[] args) {
        int arr1[] = { 1, 3 };
        int arr2[] = { 2 };
        double res;
        res = test.findMedianSortedArrays(arr1, arr2);
        System.out.println(res);
    }
}

// 执行用时：3 ms, 在所有 Java 提交中击败了61.44% 的用户
// 内存消耗：40.7 MB, 在所有 Java 提交中击败了100.00% 的用户