class public Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        if (nums1 == null || nums1.length == 0 || nums2 == null || nums2.length == 0) {
          return new int[0];
        }
        Set<Integer> parentSet = new HashSet<>();
        Set<Integer> childSet = new HashSet<>();
        for (int num : nums1) {
          parentSet.add(num);
        }
        for (int num : nums2) {
          if (parentSet.contains(num)) {
            childSet.add(num);
          }
        }
        int[] resArr = new int[childSet.size()];
        int index = 0;
        for (int value : childSet) {
          resArr[index++] = value;
        }
        return resArr;
      }

      public int[] intersection2(int[] nums1, int[] nums2) {
        Set<Integer> set = new HashSet<>();
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        int i = 0, j = 0;
        while (i < nums1.length && j < nums2.length) {
          if (nums1[i] == nums2[j]) {
            set.add(nums1[i]);
            i++;
            j++;
          } else if (nums1[i] < nums2[j]) {
            i++;
          } else if (nums1[i] > nums2[j]) {
            j++;
          }
        }
        int[] res = new int[set.size()];
        int index = 0;
        for (int num : set) {
          res[index++] = num;
        }
        return res;
      }

      public int[] intersection3(int[] nums1, int[] nums2) {
        Set<Integer> set = new HashSet<>();
        Arrays.sort(nums2);
        for (int target : nums1) {
          if (binarySearch(nums2, target)) {
            set.add(target);
          }
        }
        int index = 0;
        int[] res = new int[set.size()];
        for (int num : set) {
          res[index++] = num;
        }
        return res;
      }
      public boolean binarySearch(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        while (left <= right) {
          int mid = left + (right - left) / 2;
          if (nums[mid] == target) {
            return true;
          } else if (nums[mid] > target) {
            right = mid - 1;
          } else if (nums[mid] < target) {
            left = mid + 1;
          }
        }
        return false;
      }
}