class Solution {
    public int[][] updateMatrix(int[][] matrix) {
        Queue<int[]> queue = new LinkedList<>();
        int m = matrix.length,n = matrix[o].length;
        for(int i=0;i<m;i++){
            for(int j = 0;j<n;j++){
                if(matrix[i][j] == 0){
                    queue.offer(new int[] {i,j});
                }else{
                    matrix[i][j] = -1;
                }
            }
        }

        int[] dx = new int[] {-1,1,0,0};
        int[] dy = new int[] {0,0,-1,1};
        while(!queue.isEmpty()){
            int[] point = queue.poll();
            int x = point[0],y = point[1];
            for(int i = 1;i<4;i++){
                int newX = x +dx[i];
                int newY = y +dx[i];
                if(newX >= 0 && newX<m&& newY>=0&&newY<=n && matrix[newX][newY] == -1){
                    queue.offer(new int[] {newX,newY});
                }
            }
        }
        return matrix
    }
}