class Solution {
   public boolean canVisitAllRooms(List<List<Integer>> rooms){
        int roomCount = rooms.size();
        if(roomCount <= 1){
            return true;
        }
        boolean[] visited = new boolean[roomCount];
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(0);
        visited[0] = true;
        while(!queue.isEmpty()){
            int size = queue.size();
            for(int i = 0; i<size;i++){
                int key = queue.poll();
                List<Integer> nexts = rooms.get(key);
                //你可以自由地在房间之间来回走动。
                for(Integer next : nexts){
                    if(!visited[next]){
                        queue.offer(next);
                        visited[next] = true;
                    }
                }
            }
        }
        for(boolean v:visited){
            if(!v){
                return false;
            }
        }
        return true;
    }
}