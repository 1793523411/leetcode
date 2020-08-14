public class Solution2 {
    public List<Integer> getRow(int rowIndex) {
        List<Integer> ans = new ArrayList<>();
        int N = rowIndex;
        for (int k = 0; k <= N; k++) {
            ans.add(Combination(N, k));
        }
        return ans;
    }
    
    private int Combination(int N, int k) {
        long res = 1;
        for (int i = 1; i <= k; i++)
            res = res * (N - k + i) / i;
        return (int) res;
    }

    //上面解法可以优化，Cnk​=Cnk−1​×(n−k+1)/k
    public List<Integer> getRow(int rowIndex) {
        List<Integer> ans = new ArrayList<>();
        int N = rowIndex;
        long pre = 1;
        ans.add(1);
        for (int k = 1; k <= N; k++) {
            long cur = pre * (N - k + 1) / k;
            ans.add((int) cur);
            pre = cur;
        }
        return ans;
    }
}