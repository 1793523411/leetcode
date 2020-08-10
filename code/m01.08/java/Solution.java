class Solution {
    public void setZeroes(int[][] matrix) {
        int row = matrix.length;
        int col = matrix[0].length;
        boolean visited[][] = new boolean[row][col];
        for(int i = 0;i<row;i++){
            for(int j = 0;j<col;j++){
                if(matrix[i][j] == 0 && visited[i][j] == false){
                    for(int r = 0;r<col;r++) {if(matrix[i][r]!=0){matrix[i][r] = 0; visited[i][r] = true;}}
                    for(int c = 0;c<row;c++) {if(matrix[c][j]!=0){matrix[c][j] = 0;visited[c][j] = true;}}
                }
                visited[i][j] = true;
            }
        }
    }
}