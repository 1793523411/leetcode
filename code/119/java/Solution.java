public class Solution{
    public List<Integer> getRow(int rowIndex) {
        int pre = 1;
        List<Integer> cur = new ArrayList<>();
        cur.add(1);
        for(int i = 1;i<=rowIndex;i++){
            for(int j = 1;j<i ;j++){
                int temp = cur.get(j);
                cur.set(j,pre+cur.get(j));
                pre = temp;
            }
            cur.add(1);
        }
        return cur;
    }
    //s上面的为了解决覆盖问题使用了临时变量，也可以倒着进行，这样就不会产生覆盖
    public List<Integer> getRow2(int rowIndex) {
        int pre = 1;
        List<Integer> cur = new ArrayList<>();
        cur.add(1);
        for (int i = 1; i <= rowIndex; i++) {
            for (int j = i - 1; j > 0; j--) {
                cur.set(j, cur.get(j - 1) + cur.get(j));
            }
            cur.add(1);//补上每层的最后一个 1 
        }
        return cur;
    }
    
    //直接使用公式

}