public class Solution2{

    //这个解法没看懂，但是这种解法应该是最符合题意的解法，因为移位运算本质也是乘法和除法
    public int divide(int dividend, int divisor) {
		int ans = -1;
		int sign = 1;
		if (dividend > 0) {
			sign = opposite(sign);
			dividend = opposite(dividend);
		}
		if (divisor > 0) {
			sign = opposite(sign);
			divisor = opposite(divisor);
		}   
		
		int origin_dividend = dividend;
		int origin_divisor = divisor;
		if (dividend > divisor) {
			return 0;
		} 
		
		dividend -= divisor;
		while (divisor >= dividend) {
			ans = ans + ans;
			divisor += divisor;
			dividend -= divisor;
		}
    	//此时我们传进的是两个负数，正常情况下，它就返回正数，但我们是在用负数累加，所以要取相反数
		int a = ans + opposite(divide(origin_dividend - divisor, origin_divisor));
		if(a == Integer.MIN_VALUE){
			if( sign > 0){
				return Integer.MAX_VALUE;
			}else{
				return Integer.MIN_VALUE;
			}
		}else{
			if(sign > 0){
				return opposite(a);
			}else{
				return a;
			}
		}
	}
	public int opposite(int x) {
        //运算规则：如果位为0，结果是1，如果位为1，结果是0.
		return ~x + 1;
	}
}