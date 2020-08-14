public class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> dg = new ArrayList<>();
        if(numRows == 0){
            return dg;
        }
        if(numRows == 1){
            dg.add(new ArrayList<>());
            dg.get(0).add(1);
            return dg;
        }
        dg = generate(numRows - 1);
        List<Integer> row = new ArrayList<>();
        row.add(1);
        for(int j = 1; j< numRows - 1;j++){
            row.add(dg.get(numRows-2).get(j-1) + dg.get(numRows-2).get(j));
        }
        row.add(1);
        dg.add(row);
        return dg;
    }

    public List<List<Integer>> generate2(int numRows) {
        List<List<Integer>> dp = new ArrayList<>();
        if(numRows == 0){
            return dp;
        }
        dp.add(new ArrayList<>());
        dp.get(0).add(1);
       //注意这里的 i 是指行数，但是dp是从0开始的
       //所以preRow是i-2
       for(int i = 2;i <= numRows;i++){
            List<Integer> row = new ArrayList<>();
            List<Integer> preRow = dp.get(i-2);
            row.add(1);
            for(int j = 1;j < i-1;j++){
                row.add(preRow.get(j) + preRow.get(j-1));
            }
            row.add(1);
            dp.add(row);
        }
        return dp;
    }
}