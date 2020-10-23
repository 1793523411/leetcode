class Solution {
    public int[][] intervalIntersection(int[][] A, int[][] B) {
        int na = A.length, nb = B.length;
        if (na == 0 || nb == 0) {
            return new int[0][0];
        }
        int[][] res = new int[na + nb][];
        int idxRes = 0, idxA = 0, idxB = 0;
        while (idxA < na && idxB < nb) {
            int max_left = Math.max(A[idxA][0], B[idxB][0]);
            int min_right = Math.min(A[idxA][1], B[idxB][1]);
            //得到交集，添加到结果数组
            if (max_left <= min_right) {
                res[idxRes++] = new int[]{max_left, min_right};
            }
            //右移指针
            if (A[idxA][1] < B[idxB][1]) {
                idxA++;
            } else {
                idxB++;
            }
        }
        res = Arrays.copyOf(res, idxRes);
        return res;
    }
}