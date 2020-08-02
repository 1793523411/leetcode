class Deque-MyStack {
    //使用双端队列
    Deque<Integer> queue;

    public MyStack(){
        queue = new LinkedList<>();
    }

    public void push(int x){
        queue.offer(x);
        // for(int i = 1;i<queue.size(); i++)
        //     queue.add(queue.remove());
    }

    public int pop(){
        //poll：将首个元素从队列中弹出，如果队列是空的，就返回null
        return queue.removeLast();
    }

    public int top(){
        return queue.getLast();
    }

    public boolean empty(){
        return queue.size() == 0;
    }
}