public class Solution {
    public static int reverse(int x) {
        int res = 0;
        while (x != 0) {
            int tmp = x % 10;
            //判断最高位
            if (res > 214748364 || (res == 214748364 && tmp > 7)) {
                return 0;
            }
            if (res < -214748364 || (res == -214748364 && tmp < -8)) {
                return 0;
            }
            res = res*10 + tmp;
            System.out.println(tmp);
            x /= 10;
        }
        return res;
    }
    public static int reverse2(int x) {
        // int res = 0;
        // while (x != 0) {
        //     int t = x % 10;
        //     int newRes = res * 10 + t;
        //     //如果数字溢出，直接返回0
        //     if ((newRes - t) / 10 != res)
        //         return 0;
        //     res = newRes;
        //     x = x / 10;
        // }
        // return res;


        long res = 0;
        while (x != 0) {
            res = res * 10 + x % 10;
            x /= 10;
        }
        return (int) res == res ? (int) res : 0;
    }
    public static void main(String[] args) {
        // System.out.println(reverse(123));
        System.out.println(reverse(-123));
        // System.out.println(reverse(120));
        // System.out.println(reverse(1534236469));
        // System.out.println(reverse2(1534236469));
        // System.out.println(reverse2(1230));
    }
}