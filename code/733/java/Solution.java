class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        int origColor = image[sr][sc];
        fill(image,sr,sc,origColor,newColor);
        return image;
    }

    public void fill(int[][] image,int x, int y,int origColor,int newColor){
        if(!inArea(image,x,y)) return;
        if(image[x][y] != origColor) return;
        // if(visited[x][y]) return;
        // visited[x][y] = true;
        if(image[x][y] == -1) return;

        // image[x][y] = newColor;
        image[x][y] = -1;

        fill(image,x,y+1,origColor,newColor);
        fill(image,x,y-1,origColor,newColor);
        fill(image,x-1,y,origColor,newColor);
        fill(image,x+1,y,origColor,newColor);
        image[x][y] = newColor

    }

    public boolean inArea(int[][] image,int x,int y){
        return x >= 0 && x < image.length && y >= 0 && y <image[0].length;
    }
}