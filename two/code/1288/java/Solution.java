class Solution {
    public int removeCoveredIntervals(int[][] intervals) {
        Arrays.sort(intervals,new Comparator<>(){
            public int compare(int[] o1,int[] o2){
                if(o1[0]==o2[0]){
                    return o2[1]-o1[1];
                }else{
                    return o1[0]-o2[0];
                }
            }
        });
        int count=intervals.length,res=count;;
        int max=intervals[0][1];
        for(int i=1;i<count;i++){
            if(intervals[i][1]<=max){
                res--;
            }else{
                max=Math.max(max,intervals[i][1]);
            }
        }
        return res;
    }
}