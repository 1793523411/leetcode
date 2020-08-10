class Solution {
    public int[] findDiagonalOrder(int[][] matrix) {
        if(matrix.length == 0)
            return new int[0];
        int size = matrix.length * matrix[0].length;
        int index = 0;
        int[] result = new int[size];
        int maxK = matrix.length + matrix[0].length;
        
        for(int k = 0; k < maxK; k++)
        {
            int m = 0, n = 0;
            
            if(k % 2 == 0) //偶数部分
            {
                if(k < matrix.length)
                {
                    m = k;
                    n = 0;
                }
                else
                {
                    m = matrix.length - 1;
                    n = k - m;
                }
                while(m >= 0 && n < matrix[0].length) //n到达边界为止
                {
                    result[index++] = matrix[m][n];
                    m--;
                    n++;
                }
            }
            else //奇数部分
            {
                if(k < matrix[0].length)
                {
                    m = 0;
                    n = k;
                }
                else
                {
                    n = matrix[0].length - 1;
                    m = k - n;
                }
                while(m < matrix.length && n >= 0) //m到达边界为止
                {
                    result[index++] = matrix[m][n];
                    m++;
                    n--;
                }
            }
        }
        
        return result;
    }
}
