class Solution{
    //按行求
    public int trap(int[] height) {
        int sum = 0;
        int max = getMax(height);//找到最大的高度，以便遍历。
        // 如果求高度为 i 的水，首先用一个变量 temp 保存当前累积的水，初始化为 000。从左到右遍历墙的高度，遇到高度大于等于 i 的时候，开始更新 temp。更新原则是遇到高度小于 i 的就把 temp 加 111，遇到高度大于等于 i 的，就把 temp 加到最终的答案 ans 里，并且 temp 置零，然后继续循环
        for (int i = 1; i <= max; i++) {
            boolean isStart = false; //标记是否开始更新 temp
            int temp_sum = 0;
            for (int j = 0; j < height.length; j++) {
                if (isStart && height[j] < i) {
                    temp_sum++;
                }
                if (height[j] >= i) {
                    sum = sum + temp_sum;
                    temp_sum = 0;
                    isStart = true;
                }
            }
        }
        return sum;
    }
    private int getMax(int[] height) {
            int max = 0;
            for (int i = 0; i < height.length; i++) {
                if (height[i] > max) {
                    max = height[i];
                }
            }
            return max;
    }

}