public class Solution{

    //!这种的会超时
    public int divide(int dividend, int divisor) {
		if(dividend==Integer.MIN_VALUE&&divisor==-1)
			return Integer.MAX_VALUE;
		
		boolean k=(dividend>0&&divisor>0)||(dividend<0&&divisor<0);
		int result=0;
		dividend=-Math.abs(dividend);
            divisor=-Math.abs(divisor);
		while(dividend<=divisor) {
			dividend-=divisor;
			result+=1;
		}
		return k?result:-result;
	}

    //?采用二分法的思想，dividend每次减去2^n个divisor（尽可能多），同时reslut每次加2^n
    public int divide(int dividend, int divisor) {
    if(dividend==Integer.MIN_VALUE&&divisor==-1)
        return Integer.MAX_VALUE;
    
    boolean k=(dividend>0&&divisor>0)||(dividend<0&&divisor<0);
    int result=0;
    dividend=-Math.abs(dividend);
            divisor=-Math.abs(divisor);
    while(dividend<=divisor) {
        int temp=divisor;
        int c=1;
        while(dividend-temp<=temp) {
            temp=temp<<1;
            c=c<<1;
        }
        dividend-=temp;
        result+=c;
    }
    return k?result:-result;
}
}
