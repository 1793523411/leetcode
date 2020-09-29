class KthLargest3 {

    //通过自己实现最小堆

    /**小顶堆*/
    private int[] minHeap;
    /**堆的规模*/
    private final int k;
    /**堆的最后一个元素的索引*/
    private int last;

    public KthLargest(int k, int[] nums) {
        this.k = k;
        this.minHeap = new int[k+1];
        /**/
        for (int i = 1; i <= k && i <= nums.length; i++){
            this.minHeap[i] = nums[i-1];
            this.last = i;
        }

        /*如果小顶堆被填满了,就继续添加元素,并使堆有序*/
        if (last == k) {
            order();
            for (int i = k; i < nums.length; i++){
                add(nums[i]);
            }
        }

    }

    public int add(int val) {
        /*如果堆还未被填满（由题意堆会在至多一次add后被填满）,则将元素放在无序堆的末尾，然后将堆有序化*/
        if (last == k-1) {
            minHeap[++last] = val;
            order();
        }
        /*如果新元素大于堆中第k大的元素（minHeap[1]），则替换它，并将堆有序化*/
        else if(val > minHeap[1]){
            minHeap[1] = val;
            /*此时处堆尖处无序外,其他部分为有序,所以只需将堆顶下沉即可*/
            sink(1);
        }
        return minHeap[1];
    }

    /**堆的有序化*/
    private void order(){
        for (int i = k/2; i >=1 ; i--) {
            sink(i);
        }
    }

    /**下沉*/
    private void sink(int i){
        while( 2*i <= k){
            int j = 2*i;

            if ( j < k && minHeap[j] > minHeap[j+1]) {
                j++;
            }

            if ( minHeap[i] > minHeap[j]){
                int temp = minHeap[i];
                minHeap[i] = minHeap[j];
                minHeap[j] = temp;

                i = j;
            }else {
                break;
            }
        }
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = new KthLargest(k, nums);
 * int param_1 = obj.add(val);
 */