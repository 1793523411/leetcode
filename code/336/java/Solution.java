class Solution {
    //暴力解法，超时
    public List<List<Integer>> palindromePairs(String[] words) {
        List<List<Integer>> ans = new ArrayList<>();
        int n = words.length;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i == j) continue;
                if (!check(words[i]+words[j])) continue;
                List<Integer> temp = new ArrayList<>();
                temp.add(i); temp.add(j);
                ans.add(temp);
            }
        }
        return ans;
    }
    private boolean check(String s) {
        int i = 0, j = s.length()-1;
        while (i < j) {
            if (s.charAt(i) != s.charAt(j)) return false;
            i++; j--;
        }
        return true;
    }
}
