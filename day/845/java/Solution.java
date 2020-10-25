class Solution {
    //!分别以每一个元素作为山顶，求解每一个元素左侧连续小于它的元素个数：left数组，右侧连续小于它的元素个数：right数组。准备好以上的left数组和right数组之后，重新枚举山顶，计算以每个元素作为山顶的山脉的长度。最后返回最大值。https://leetcode-cn.com/problems/longest-mountain-in-array/solution/mo-ni-dan-diao-zhan-845-shu-zu-zhong-de-zui-chang-/

    //?模拟单调栈
    public int longestMountain(int[] A) {
        List<Integer> stack = new ArrayList();
        int n = A.length;
        int [] left = new int[n], right = new int[n], res = new int[n];
        //计算left
        for(int i = 0; i < n; i++){
            if(stack.size()!=0 && (int)stack.get(stack.size() - 1) >= A[i]){
                stack.clear();
            }
            if(stack.size()==0 || (int)stack.get(stack.size() - 1) < A[i]){
                stack.add(A[i]);
            }
            left[i] = stack.size() - 1;
        }
        stack.clear();
        //计算right
        for(int i = n-1; i >=0; i--){
            if(stack.size() != 0 && (int)stack.get(stack.size() - 1) >= A[i]){
                stack.clear();
            }
            if(stack.size()==0 || (int)stack.get(stack.size() - 1) < A[i]){
                stack.add(A[i]);
            }
            right[i] = stack.size() - 1;
        }
        int ans = 0;
        //左边加右边+自身
        for(int i = 0; i < n; i++){
            res[i] = left[i] > 0 && right[i] > 0 ? left[i] + right[i] + 1: 0;
            ans = Math.max(res[i], ans);
        }
        return ans;
    }

    public int longestMountain2(int[] A) {
        if(A.length<3)  return 0;
         int []left =new int [A.length];
         int [] right = new int [A.length];
         for(int i=1;i<A.length;i++){
             left[i] = A[i]>A[i-1]?left[i-1]+1:0;//对于左边，如果当前索引值比前一个值小，那么他的左山脚为i-1的山脚数+1，否则就是0
         } 
         for(int i=A.length-2;i>=0;i--){
             right[i] = A[i]>A[i+1]?right[i+1]+1:0;//右边道理类似
         }
         int max = 0;
         for(int i=0;i<A.length;i++){
             if(left[i]!=0&&right[i]!=0) max = Math.max(left[i]+right[i]+1,max);
         } 
         return max;
     }
}
