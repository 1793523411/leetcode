class Solution {
    private final int L = 9;
    public boolean isValidSudoku(char[][] board) {
        boolean[][] rows = new boolean[L][L];
        boolean[][] cols = new boolean[L][L];
        boolean[][] boxes = new boolean[L][L];

        for (int r = 0; r < L; ++r) {
            for (int c = 0; c < L; ++c) {
                if (board[r][c] != '.') {
                    int value = board[r][c] - '1';
                    int boxIndex = r / 3 * 3 + c / 3;
                    if (rows[r][value] || cols[c][value] || boxes[boxIndex][value]) {
                        return false;
                    } 
                    rows[r][value] = true;
                    cols[c][value] = true;
                    boxes[boxIndex][value] = true;
                }
            }
        }
        return true;
    }
}