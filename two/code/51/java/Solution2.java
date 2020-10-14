class Solution2 {
    //!有点看不懂
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> list = new LinkedList<>();
        if (n <= 0) {
            return list;
        }

        if (n == 1) {
            list.add(Collections.singletonList("Q"));
            return list;
        }

        int[] indexes = new int[n];

        calc(list, indexes, n, 0);

        return list;
    }

    private void calc(List<List<String>> list, int[] indexes, int n, int i) {
        if (i == n) {
            List<String> entry1 = new LinkedList<>();
            List<String> entry2 = new LinkedList<>();
            for (int index : indexes) {
                entry1.add(getRow(n, index));
                entry2.add(getRow(n, n - 1 - index));
            }

            list.add(entry1);
            list.add(entry2);

            return;
        }

        int[] available = new int[n];
        if (i == 0 || (i == 1 && n % 2 == 1 && indexes[0] == (n >> 1))) {
            for (int j = (n + 1) >> 1; j < n; j++) {
                available[j] = 1;
            }
        }

        for (int j = 0; j < i; j++) {
            available[indexes[j]] = 1;

            int left = indexes[j] + j - i;
            if (left >= 0) {
                available[left] = 1;
            }

            int right = indexes[j] + i - j;
            if (right < n) {
                available[right] = 1;
            }
        }

        for (int j = 0; j < n; j++) {
            if (available[j] == 1) {
                continue;
            }

            indexes[i] = j;

            calc(list, indexes, n, i + 1);
        }
    }

    private String getRow(int n, int index) {
        char[] cs = new char[n];
        for (int i = 0; i < n; i++) {
            cs[i] = '.';
        }

        cs[index] = 'Q';

        return String.valueOf(cs);
    }
}