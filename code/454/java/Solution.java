class Solution {
    public int fourSumCount(int[] A, int[] B, int[] C, int[] D) {
        HashMap<Integer,Integer> map=new HashMap<>();
        
        int sum=0;
        for(int i=0;i<A.length;i++){
            for(int j=0;j<B.length;j++){
                sum=A[i]+B[j];
                if(map.containsKey(sum)){
                    map.put(sum,map.get(sum)+1);
                }else{
                    map.put(sum,1);
                }
                
            }
        }
        
        int count=0;
        int sum2=0;
        for(int i=0;i<C.length;i++){
            for(int j=0;j<D.length;j++){
                sum2=-C[i]-D[j];
                if(map.containsKey(sum2)){
                    count+=map.get(sum2);
                }
                
                
            }
        }
        return count;
            
    }

    //另一种简单写法
    public int fourSumCount2(int[] A, int[] B, int[] C, int[] D) {
        Map<Integer,Integer> map=new HashMap();
        int count=0;
        for(int a:A)
            for(int b:B)
                map.put(a+b,map.getOrDefault(a+b,0)+1);        //若有a+b这个key则用它的值+1，若没有就用默认的0
        for(int c:C)
            for(int d:D)
                count+=map.getOrDefault(-c-d,0);        //若有-c-d这个key就用它的值，代表-c-b=a+b
        
        return count;
    }
}