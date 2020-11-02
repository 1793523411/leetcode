class Solution{
    public int[] intersection(int[] nums1, int[] nums2) {
        Set<Integer> set = new HashSet<>();
        Arrays.sort(nums2);
        for (int target : nums1) {
          if (binarySearch(nums2, target) && !set.contains(target)) {
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