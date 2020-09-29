public class KthLargest2 {

    // 关于 Java 的 PriorityQueue 优先级队列
    // 1 是线程不安全的队列
    // 2 存储使用数组实现
    // 3 利用比较器做优先级比较

    // 实现说明
    // 1 最小堆的特性就是最小的值在最上面，每次取O(1)，插入O(logn)
    // 2 初始化的时候，注意如何添加元素，并给队列一个合适大小的初值
    // 3 每次添加元素，能添加到队列的有两种情况，一种未到k个，另一种比堆顶大

    //最小堆解决
    private PriorityQueue<Integer> queue;
    private int limit;

    public KthLargest(int k, int[] nums) {
        limit = k;
        queue = new PriorityQueue<>(k);
        for (int num : nums) {
            add(num);
        }
    }

    public int add(int val) {
        if (queue.size() < limit) {
            queue.add(val);
        } else if (val > queue.peek()) {
            queue.poll();
            queue.add(val);
        }

        return queue.peek();
    }

}