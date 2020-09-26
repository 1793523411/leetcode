class Solution {
    int s;
    
        //牛顿迭代法
 public int mySqrt(int x) {
     s=x;
     if(x==0) return 0;
    return ((int)(sqrts(x)));
  }
    
    public double sqrts(double x){
      double res = (x + s / x) / 2;
    if (res == x) {
      return x;
    } else {
      return sqrts(res);
    }
    } 

    //二分查找

    public int mySqrt(int x) { 
        if (x == 0) return 0; 
        long left = 1; 
        long right = x / 2; 
        while (left < right) { 
            //注意这一行代码 
            long mid = (right + left) / 2 + 1;
            if (mid > x / mid) {
                right = mid - 1;
            } else {
                left = mid;
            }
        }
        return (int) left;
    }

}