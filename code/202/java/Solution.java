public class Solution {
    // 每个数字都会根据 各位平方和 指向另一个数字，所以从任意数字开始进行 各位平方和 的迭代操作，就相当于在链表上游走。如果 无限循环 但始终变不到 1，那说明肯定是链表游走到了环。

    public int squareSum(int n) {
        int sum = 0;
        while(n > 0){
            int digit = n % 10;
            sum += digit * digit;
            n /= 10;
        }
        return sum;
    }

    public boolean isHappy(int n) {
        int slow = n, fast = squareSum(n);
        while (slow != fast){
            slow = squareSum(slow);
            fast = squareSum(squareSum(fast));
        };
        return slow == 1;
    }

    // 首先定义一个Set集合，用来存放计算后的平方和m，如果m在Set中已存在，即进入了死循环，则退出；
    // 如果m不存在Set，则将m放入Set；
    // 直至找到平方和为1或者set集合中存在该平方和（进入死循环）就退出

    class Solution {
        public boolean isHappy(int n) {
            Set<Integer> set = new HashSet<>();
            int m = 0;
            while(true){
                while(n != 0){
                    m += Math.pow(n%10, 2);
                    n /= 10;
                }
                if(m == 1){
                    return true;
                }
                if(set.contains(m)){
                    return false;
                }else{
                    set.add(m);
                    n = m;
                    m = 0;
                }
            }        
        }
    }
}