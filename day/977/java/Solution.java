class Solution{
    //双指针
    public int[] sortedSquares(int[] A) {
        int left = 0;
        int length = A.length;
        int right = length - 1;
        int index = length - 1;
        int[] res = new int[length];
        while (index >= 0) {
            //!判断哪个元素的绝对值大
            // if (Math.abs(A[left]) > Math.abs(A[right])) {
            //!判断哪个元素的绝对值大
            if (A[left] + A[right] < 0) {
                res[index--] = A[left] * A[left];
                left++;
            } else {
                res[index--] = A[right] * A[right];
                right--;
            }
        }
        return res;
    }

    //直接排序
    public int[] sortedSquares(int[] A) {
        return Arrays.stream(A).map(a -> a * a).sorted().toArray();
    }
}