class Solution2{
    //DFS
    Set<Integer> set = new HashSet<>();
    public boolean canVisitAllRooms(List<List<Integer>> rooms) {
        dfs(rooms,0);
        return set.size() == rooms.size();
    }
    public void dfs(List<List<Integer>> arr, int i){
        set.add(i);
        List<Integer> list = arr.get(i);
        for(Integer a : list){
            if(!set.contains(a)){
                set.add(a);
                dfs(arr,a)
            }
        }
    }
}