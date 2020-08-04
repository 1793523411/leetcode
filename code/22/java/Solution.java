public class Solution {
    
    public List<String> generateParenthesis(int n) {
        List<String> res = new ArrayList<>();
        if(n == 0){
            return res;
        }
        dfs("",n,n,res);
        return res;
    }
//DFS减法
    private void dfs(String curStr, int left, int right,List<String> res){
        if(left == 0 && right == 0){
            res.add(curStr);
            return;
        }
        if(left > right){
            return;
        }
        if(left > 0){
            dfs(curStr + "(", left - 1, right, res);
        }
        if(right > 0){
            dfs(curStr + ")",left, right - 1,res);
        }
    }
    //加法
    private void dfs2(String curStr, int left, int right,List<String> res){
        if(left == n && right == n){
            res.add(curStr);
            return;
        }
        if(left < right){
            return;
        }
        if(left > 0){
            dfs(curStr + "(", left + 1, right, res);
        }
        if(right > 0){
            dfs(curStr + ")",left, right + 1,res);
        }
    }
}