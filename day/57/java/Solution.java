class Solution{
    public int[][] insert(int[][] intervals, int[] newInterval) {
        //边界条件判断
        if (intervals.length == 0)
            return new int[][]{newInterval};
        List<int[]> resList = new ArrayList<>();

        //一个从左边开始找不重合的
        int left = 0;
        //一个从右边开始找不重合的
        int right = intervals.length - 1;

        //左边不重合的添加到list中
        while (left < intervals.length && intervals[left][1] < newInterval[0]) {
            resList.add(intervals[left++]);
        }

        //右边不重合的添加到list中
        while (right >= 0 && intervals[right][0] > newInterval[1]) {
            resList.add(left, intervals[right--]);
        }

        //下面一大坨是合并中间重合的，注意一些边界条件的判断
        int[] newArr = new int[2];
        newArr[0] = left >= intervals.length ? newInterval[0] : Math.min(intervals[left][0], newInterval[0]);
        newArr[1] = right < 0 ? newInterval[1] : Math.max(intervals[right][1], newInterval[1]);
        resList.add(left, newArr);

        //这一大坨是把list转二维数组
        int[][] resArr = new int[resList.size()][2];
        for (int i = 0; i < resList.size(); i++) {
            resArr[i] = resList.get(i);
        }
        return resArr;
    }


    public int[][] insert2(int[][] intervals, int[] newInterval) {
        List<int[]> resList = new ArrayList<>();
        int i = 0;
        //先把前面不重合的添加到list中
        while (i < intervals.length && intervals[i][1] < newInterval[0])
            resList.add(intervals[i++]);

        int mergeStar = newInterval[0];
        int mergeEnd = newInterval[1];
        //前面不重合的都添加到集合list中了，从这里开始就出现重合了，我们要找到重合的开始和结束值
        while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
            mergeStar = Math.min(mergeStar, intervals[i][0]);
            mergeEnd = Math.max(mergeEnd, intervals[i][1]);
            i++;
        }
        //然后再把重合的添加到list中
        resList.add(new int[]{mergeStar, mergeEnd});

        //把剩下的在添加到集合list中
        while (i < intervals.length)
            resList.add(intervals[i++]);

        //这一大坨是把list转二维数组
        int[][] resArr = new int[resList.size()][2];
        for (int j = 0; j < resList.size(); j++) {
            resArr[j] = resList.get(j);
        }
        return resArr;
    }
}