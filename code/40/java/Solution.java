import java.util.LinkedList;
import java.util.Arrays;
class Solution {
    public List<List<Integer>> result = new LinkedList<>();
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        if(candidates.length == 0){
            return result;
        }
        Arrays.sort(candidates);
        comSum2(candidates,target,0,new LinkedList<Integer>());
        return result;

    }
    public void comSum2(int[] candidates, int target, int index, LinkedList<Integer> trace){
        //满足结束条件
        if(target == 0){
            result.add(new LinkedList(trace));
            return ;
        }
        if(target > 0){
            //选择列表，并加上约束
            for(int i = index; i<candidates.length; i++){
                //!如果以当前结点为头结点的所有组合都找完了，那么下一个与他他相同的头结点就不用去找了。
                if(i > index && candidates[i] == candidates[i - 1]) continue;
                //做出选择
                trace.add(candidates[i]);
                comSum2(candidates,target - candidates[i],i+1,trace);
                //撤销选择
                trace.removeLast();
            }
        }
    }
}
